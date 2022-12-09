/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = num => {  
    let results = [];
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) results.push ("fizzbuzz");
        else if (i % 5 === 0) results.push ("buzz");
        else if (i % 3 === 0) results.push ("fizz");
        else results.push(i); 
    }
    return results;
};

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]

*/

const fizzbuzzbazz = num => {
    let results = [];
    for (let i = 1; i <= num; i++) {
        if (i % 105 === 0) results.push ("fizzbuzzbazz")
        else if (i % 35 === 0) results.push ("buzzbazz")
        else if (i % 21 === 0) results.push ("fizzbazz");
        else if (i % 15 === 0) results.push ("fizzbuzz");
        else if (i % 7 === 0) results.push ("bazz");
        else if (i % 5 === 0) results.push ("buzz");
        else if (i % 3 === 0) results.push ("fizz");
        else results.push(i); 
    }
    return results;
};

module.exports = {fizzbuzz, fizzbuzzbazz};