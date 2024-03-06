// console.log('test');

/*
*SNACK 6*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const soccerTeamsList = [
    {
        name: 'Real Madrid',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Manchester United',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Barcelona',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Manchester City',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Liverpool',
        points: 0,
        fouls: 0,
    },
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


const editedSoccerTeamsList = soccerTeamsList.map((team) => {
    team.points = getRndInteger(0, 40);
    team.fouls = getRndInteger(0, 20);
    return team
});

console.log(editedSoccerTeamsList);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

/* const shortEditedSoccerTeamsList = editedSoccerTeamsList.map((team) => {
    delete team.points
    return team
}); */

/* const shortEditedSoccerTeamsList = editedSoccerTeamsList.map(({points, ...rest}) =>  rest); */

/* const shortEditedSoccerTeamsList = editedSoccerTeamsList.map(({name, fouls} = team) => {
    return {name, fouls}
}); */

// short version
const shortEditedSoccerTeamsList = editedSoccerTeamsList.map(({name, fouls}) => ({name, fouls}));

console.log(shortEditedSoccerTeamsList);