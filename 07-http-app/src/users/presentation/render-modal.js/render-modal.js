import modalHtml from './render-modal.html?raw'
import { getUserById } from '../../use-cases/load-user-by-id'
import './render-modal.css'
import { User } from '../../models/user';

let modal, form;
let loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {};

    if( !id )   return;
    const user = await getUserById( id );
    setFormValues(user)
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param { User } user 
 */
export const setFormValues = ( user ) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').value = user.isActive;
    loadedUser = user;
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback 
 */
export const renderModal = ( element, callback ) => {
    if( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    
    modal.addEventListener('click', ( event ) => {
        if( event.target.className !== 'modal-container' ) return;
        hideModal();
    });

    form.addEventListener('submit' , async( event ) =>{
        event.preventDefault();

        const formData = new FormData( form );
        
        const userLike = {...loadedUser};

        for (const [key, value] of formData) {
            switch (key) {
                case 'balance':
                    userLike[key] = +value; //!Conversión a número
                    break;

                default:
                    userLike[key] = value;
                    break;
            }
        }
        userLike["isActive"] = formData.get("isActive") ? true : false;
        console.log(userLike['isActive']);
        await callback(userLike);
        hideModal();
    })

    element.append( modal );
}
