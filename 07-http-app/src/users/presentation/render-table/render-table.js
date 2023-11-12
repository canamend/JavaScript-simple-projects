import usersStore from '../../store/users-store';
import { deleteUser } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal.js/render-modal';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders =document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `

    const tableBody = document.createElement('tbody');
    tableBody.innerHTML = ``
    table.append( tableHeaders, tableBody );
    return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    if( event.target.className !== 'select-user') return;
    const id = event.target.getAttribute('data-id')
    showModal( id );
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeleteListener = async(event) => {
    if( event.target.className !== 'delete-user') return;
    const id = event.target.getAttribute('data-id');
    try {
        await deleteUser(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();
    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar')
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if( !table ){
        table = createTable();
        element.append( table );

        //TODO: añadir listeners a table
        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);
    }

    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td> ${ user.id } </td>
                <td> ${ user.balance } </td>
                <td> ${ user.firstName } </td>
                <td> ${ user.lastName } </td>
                <td> ${ user.isActive } </td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>                  
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}