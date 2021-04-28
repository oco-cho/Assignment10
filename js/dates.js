//STEP 1

// let month = function (month) {
//     return new Date(2021, month, 0).getDate();
// }

// console.log(month(Number(prompt('Enter any month in numerical format (1-12)'))));


//STEP 2

// let month = function (date) {
//    let d = new Date(date);
//    return d.toLocaleDateString('default', {month: 'long'});
// }

// console.log(month(prompt('Enter a date using the following format: 00/00/0000')));


//STEP 3

// let weekend = function (date) {
//     let d = new Date(date);
//     if (d.getDay() === 6 || d.getDay() === 0) {
//         console.log('WEEKEND!');
//     } else {
//         console.log('Sorry, WEEKDAY :(');
//     }
// }

// weekend(prompt('Enter a date using the following format: 00/00/0000'));


//STEP 4

// let yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);
// console.log(yesterday.toLocaleDateString('default', {weekday: 'long'}));


//STEP 5

// let d = new Date();
// console.log(d.toLocaleDateString('default', {weekday: 'long'}).charAt(0));

