// console.log('test');

/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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

let weight = 0;

/* zucchine.forEach((zucchina) => {
    weight = weight + zucchina.peso
}); */

// short version
zucchine.forEach(zucchina => weight += zucchina.peso);

console.log(weight);