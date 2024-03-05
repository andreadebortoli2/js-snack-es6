// console.log('test');

/*
SNACK 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’];
*/

const disneyCharacters = ['pippo', 'PLUTO', 'Paperino'];

/* const disneyLowerCase = disneyCharacters.map((character) => {
    return character.toLowerCase()
}); */
const disneyLowerCase = disneyCharacters.map(character => character.toLowerCase());

console.log(disneyLowerCase);

/* const disneyCharactersJustify = disneyLowerCase.map((character) => {
    return character.charAt(0).toUpperCase()+character.slice(1)
});
 */
const disneyCharactersJustify = disneyLowerCase.map(character => character.charAt(0).toUpperCase() + character.slice(1));

console.log(disneyCharactersJustify);

// in one line
const finished = disneyCharacters.map(character => character.charAt(0).toUpperCase() + character.slice(1).toLowerCase());

console.log(finished);