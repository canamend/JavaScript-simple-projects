import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal.js/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import { showModal } from './presentation/render-modal.js/render-modal';
import { saveUser } from './use-cases/save-user'
import usersStore from './store/users-store';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) =>{
    await usersStore.loadNextPage();

    renderTable( element );
    renderButtons( element );
    renderAddButton( element, () => showModal() );
    renderModal( element, async( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChanged( user );
        renderTable();
    });
}