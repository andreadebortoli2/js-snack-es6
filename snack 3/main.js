// console.log('test');

/*
SNACK 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.

Es:

[
    { 
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    { 
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    { 
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
];

Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'orso',
        famiglia: 'ursidi',
        classe: 'mammiferi',
    },
    {
        nome: 'squalo',
        famiglia: 'condritti',
        classe: 'pesci',
    },
    {
        nome: 'rana',
        famiglia: 'anuri',
        classe: 'anfibi',
    },
    {
        nome: 'tartaruga',
        famiglia: 'sauropsidi',
        classe: 'rettili',
    },
    {
        nome: 'elefante',
        famiglia: 'elefantidi',
        classe: 'mammiferi',
    },
    {
        nome: 'alligatore',
        famiglia: 'alligatoridi',
        classe: 'rettili',
    },
    {
        nome: 'cavallo',
        famiglia: 'equidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gufo',
        famiglia: 'strigidi',
        classe: 'uccelli',
    },
];

const mammals = animals.filter(animal => animal.classe === 'mammiferi');

console.log(mammals);
