import { heroes } from '../data/heroes';

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const callbacksComponent = ( element ) => {
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';

    findHero( id1, (error, hero1) => {

        if( error ){
            element.innerHTML = error; 
            return;
        }

        findHero( id2, ( error, hero2 ) => {
            if( error ){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero1.name } / ${ hero2.name }`
        })
    });
}


/**
 * 
 * @param {String} id 
 * @param { ( error: String|Null, hero: Object)=> void } callback 
 */
const findHero = ( id, callback) => {
    const hero = heroes.find( hero => hero.id === id );

    if( !hero ){
        callback( `Hero with id ${ id } not found` );
        return;
    }

    callback( null, hero );
}

