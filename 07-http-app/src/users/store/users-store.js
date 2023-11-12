import { User } from '../models/user';
import {loadUsersByPage} from '../use-cases/load-users-by-page';
const state = {

    currrentPage: 0,
    users: [],

}

const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currrentPage + 1 );
    if( users.length === 0 ) return;
    state.currrentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage( state.currrentPage -1 );
    if( users.length === 0 || state.currrentPage === 1 ) return;
    state.currrentPage -= 1;
    state.users = users
}

/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = ( updatedUser ) => {

    let wasFound = false;

    state.users = state.users.map( user => {
        if( user.id === updatedUser.id ){
            return updatedUser;
        }
        return user;
    })

    if( state.users.length < 10 && !wasFound){
        state.users.push( updatedUser );
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage( state.currrentPage );
    if( users.length === 0 ) {
        await loadPreviousPage();
        return;
    }
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currrentPage,
}