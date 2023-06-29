import { heroes } from "../data/heroes"

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const promiseComponent = ( element ) => {
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3> ${ hero1.name } </h3>    
            <h3> ${ hero2.name } </h3>
        `;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
            `
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    let hero1, hero2;

    //* Promise.all
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2 ) )
    .catch( renderError );

    //? Protip: retornar una promesa

    //? findHero(id1)
    //?     .then( hero => {
    //?         hero1 = hero;
    //?         return findHero( id2 );
    //?     }).then( hero2 => {
    //?         renderTwoHeroes( hero1, hero2 );
    //?     })


    //* Referencia de cómo manejar parámetros en una promesa
    // findHero( id1 )
    //     //.then( superHero => renderHero( superHero ) );
    //     .then( renderHero )
    //     .catch( error => renderError( error ) )
    //     //.catch( renderError );

    //! CALLBACK HELL 
    // findHero( id1 )
    //    .then( (hero) => {
    //         hero1 = hero;
    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch( renderError );
    //    } )
    //     .catch( error => renderError( error ) );
    //! End of callback hell

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id);
    
        if( hero ){
            resolve(hero);
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });

}
