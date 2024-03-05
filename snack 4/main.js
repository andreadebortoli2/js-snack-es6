// console.log('test');

/* 
SNACK 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const peoples = [
    {
        nome: 'Andrea',
        cognome: 'Ferrari',
        eta: '26',
    },
    {
        nome: 'Beatrice',
        cognome: 'Rossi',
        eta: '33',
    },
    {
        nome: 'Lorenzo',
        cognome: 'Marino',
        eta: '59',
    },
    {
        nome: 'Chiara',
        cognome: 'Bruno',
        eta: '15',
    },
    {
        nome: 'Francesco',
        cognome: 'Russo',
        eta: '18',
    },
    {
        nome: 'Gabriele',
        cognome: 'Ricci',
        eta: '41',
    },
    {
        nome: 'Aurora',
        cognome: 'Esposito',
        eta: '60',
    },
    {
        nome: 'Lucia',
        cognome: 'Colombo',
        eta: '10',
    },
    {
        nome: 'Bianca',
        cognome: 'Romano',
        eta: '13',
    },
    {
        nome: 'Alessandro',
        cognome: 'Bianchi',
        eta: '36',
    },
];

/* const peoplesDetails = peoples.map(person => person.name = `${person.nome}`+ ' '+`${person.cognome}`);

console.log(peoplesDetails);

const drivers = peoples.map(driver => driver.license = driver.eta >= 18 ? 'can drive' : 'underage to drive');

console.log(drivers); */

// object with all properties
const editedPeopleList = peoples.map((person) => {
    person.details = `${person.nome}` + ' ' + `${person.cognome}` + ' ' + `${person.eta >= 18 ? 'can drive' : 'is underage to drive'}`;
    
    return person
});

console.log(editedPeopleList);

// object with one property
const shortEditedPeopleList = peoples.map(person => person.details = `${person.nome}` + ' ' + `${person.cognome}` + ' ' + `${person.eta >= 18 ? 'can drive' : 'is underage to drive'}`);

console.log(shortEditedPeopleList);
