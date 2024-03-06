// console.log('test');

/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
    {
        varieta: 'zucca romanesca',
        peso: 3,
        lunghezza: 15,
    },
    {
        varieta: 'zucca trombetta',
        peso: 2,
        lunghezza: 21,
    },
    {
        varieta: 'zucca costata',
        peso: 7,
        lunghezza: 8,
    },
    {
        varieta: 'zucca crookneck',
        peso: 1,
        lunghezza: 28,
    },
    {
        varieta: 'zucca zucchini rampicante',
        peso: 5,
        lunghezza: 19,
    },
    {
        varieta: 'zucca romanesca',
        peso: 3,
        lunghezza: 15,
    },
    {
        varieta: 'zucca trombetta',
        peso: 2,
        lunghezza: 21,
    },
    {
        varieta: 'zucca costata',
        peso: 7,
        lunghezza: 8,
    },
    {
        varieta: 'zucca crookneck',
        peso: 1,
        lunghezza: 28,
    },
    {
        varieta: 'zucca zucchini rampicante',
        peso: 5,
        lunghezza: 19,
    },
];

/* const shortZucchine = zucchine.filter(zucchina => zucchina.lunghezza <= 15);
console.log(shortZucchine); */

/* const longZucchine = zucchine.filter(zucchina => zucchina.lunghezza > 15);
console.log(longZucchine); */

let shortZucchineWeight = 0;
let longZucchineWeight = 0; 

/* zucchine.forEach((zucchina) => {
    if (zucchina.lunghezza <= 15) {
        shortZucchineWeight += zucchina.lunghezza
    } else {
        longZucchineWeight += zucchina.lunghezza
    };
}); */


// short version
zucchine.forEach(zucchina => zucchina.lunghezza <= 15 ? shortZucchineWeight += zucchina.lunghezza : longZucchineWeight += zucchina.lunghezza)

console.log(shortZucchineWeight);
console.log(longZucchineWeight);