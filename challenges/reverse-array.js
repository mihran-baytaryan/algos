/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = array => {

    let counter = 0;

    while (counter < Math.floor(array.length/2)){

        [array[counter], array[array.length - (counter + 1)]] = [array[array.length - (counter + 1)], array[counter]];

        counter++

    }

    return array;

};

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {       //doing in place mutation but with reassignment, would be issue if arugment is const. can do in different ways

    const array = sentence.match(/[^\s]+/g);
    array
    sentence = '';
    for (let i = array.length -1; i >= 0; i --) {
        sentence += array[i];
        if (i > 0) sentence += " ";
    }

    return sentence;
  
};

module.exports = {reverseArray, reverseSentence};

console.log(reverseSentence('teriyaki chicken'));