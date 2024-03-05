// console.log('test');

/* 
SNACK 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina',
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'gpl',
    },
    {
        marca: 'fiat',
        modello: 'tipo',
        alimentazione: 'diesel',
    },
    {
        marca: 'mazda',
        modello: 'boh',
        alimentazione: 'diesel',
    },
    {
        marca: 'suzuki',
        modello: 'jimny',
        alimentazione: 'benzina',
    },
    {
        marca: 'toyota',
        modello: 'pryus',
        alimentazione: 'elettrico',
    },
    {
        marca: 'tesla',
        modello: 'model d',
        alimentazione: 'elettrico',
    },
    {
        marca: 'audi',
        modello: 'a1',
        alimentazione: 'diesel',
    },
    {
        marca: 'bmw',
        modello: 'serie',
        alimentazione: 'gpl',
    },
    {
        marca: 'volkswagen',
        modello: 'golf',
        alimentazione: 'metano',
    },
];

/* const fuelCars = cars.filter((car) => {
    if (car.alimentazione === 'benzina') {
        return true
    }
}); */

const petrolCars = cars.filter(car => car.alimentazione === 'benzina');

/* const dieselCars = cars.filter((car) => {
    if (car.alimentazione === 'diesel') {
        return true
    }
}); */

const dieselCars = cars.filter(car => car.alimentazione === 'diesel');

/* const otherCars = cars.filter((car) => {
    if (car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina') {
        return true
    }
}); */

const otherCars = cars.filter(car => car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina');

console.log(petrolCars);
console.log(dieselCars);
console.log(otherCars);