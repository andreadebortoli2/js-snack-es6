// console.log('test');

/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

const word = 'ciao';

const wordReverse = word.split('').reverse().join('');

console.log(wordReverse);


// as a function

function reverseTheWord(params) {
    const reversedWord = params.split('').reverse().join('');
    console.log(reversedWord);
};

reverseTheWord('ciao');