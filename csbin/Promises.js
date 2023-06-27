/*
Promises
Challenge 1
Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.
Challenge 2
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then
Challenge 3
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch
Challenge 4
Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?
Challenge 5
Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms
Challenge 6
This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then
Challenge 7
We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete

// Challenge 1

function sayHello() {

}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
});

// Should print out "Resolved!"
// ADD CODE HERE


// Challenge 3

promise = new Promise(function(resolve, reject) {
  // ADD CODE HERE
})

// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");


// Challenge 5
function delay(){

}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
// var secondPromise =
// var firstPromise =


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
}
*/

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {resolve('Resolved!')}, 1000);
// });
// promise.then(data => console.log(data));

// const promise2 = new Promise((resolve, reject) => {
//   resolve("heyooo")
// });
// promise2.catch(err => console.log(err));
// promise2.then(data => console.log(data));
// console.log("I'm not the promise!");

// delay = function () {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {resolve('Rizzolved')}, 500)
//   })
// }
// const promise3 = delay();
// promise3.then(data => console.log(data))

// const thirdPromise = new Promise ((resolve, reject) => {
//   resolve('Turd promise')
// })
// const secondPromise = new Promise ((resolve, reject) => {
//   resolve(thirdPromise);
// });
// const firstPromise = new Promise ((resolve, reject) => {
//   resolve(secondPromise);
// });
// firstPromise.then(data => console.log(data));

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  Promise.all([
    fakeAPICall(0),
    fakeAPICall(1),
    fakeAPICall(2)
  ]).then(data => data.forEach(el => console.log(el)));
}

getAllData();