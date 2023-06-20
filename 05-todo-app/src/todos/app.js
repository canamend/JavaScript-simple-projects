import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPendingTodos } from './usecases';

const ElementIDs = {
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    PendingCountLabel: '#pending-count'
}
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPendingTodos( ElementIDs.PendingCountLabel );
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
        displayTodos();
    })();

    //Referencias HTML

    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUl = document.querySelector( ElementIDs.TodoList );
    const completedDeleter = document.querySelector( ElementIDs.ClearCompleted );
    const filtersLi = document.querySelectorAll( ElementIDs.TodoFilters );

    //Listener
    newDescriptionInput.addEventListener('keyup', ( event ) =>{
        if( event.keyCode !== 13) return;
        if( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) =>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) =>{
        const isDestroyable = event.target.className === 'destroy'
        const element = event.target.closest('[data-id]');
        if( !isDestroyable || !element ) return;

        console.log(element.getAttribute('data-id'))
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
        
    });

    completedDeleter.addEventListener('click', () =>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLi.forEach( element => {

        element.addEventListener('click', (element) =>{
            filtersLi.forEach( el => el.classList.remove('selected'))
            element.target.classList.add('selected')
            
            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
                
            }

            displayTodos();
        });

    });
}