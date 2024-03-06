// console.log('test');

/*
*SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        name: 'Cannondale SuperSix Evo Hi-Mod 2',
        weight: 7.7,
    },
    {
        name: 'Enve Melee',
        weight: 7.2,
    },
    {
        name: 'Trek Domane+ SLR',
        weight: 11.8,
    },
    {
        name: 'Scott Foil RC Ultimate',
        weight: 7.28,
    },
    {
        name: 'Canyon Ultimate',
        weight: 7.43,
    },
];

let lightestWeight = 100;

let lightestBike;

bikes.forEach((bike) => {

    const { name, weight } = bike

    /* if (weight < lightestWeight) {
        lightestWeight = weight;
        lightestBike = name;
    }; */

    weight < lightestWeight ? (lightestWeight = weight, lightestBike = name) : ''

});


console.log(`the lightest bike is ${lightestBike}, with the weight of ${lightestWeight} kg`);