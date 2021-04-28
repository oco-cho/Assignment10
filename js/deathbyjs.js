//STEP 1

// let x = function (x) {
//     let string = x.toLowerCase().match(/[a-z]/g).sort().join('');
//     return string;
// }

// console.log(x(prompt('Enter a string of text')));


//STEP 2

// let x = function (string) {

//     let result = string.toLowerCase().split(' ');

//     for (let i = 0; i < result.length; i++) {
//         result[i] = result[i].replace(result[i].charAt(0), result[i].charAt(0).toUpperCase());
//     }

//     return result.join(' ');
// }

// console.log(x(prompt('Enter a sentence.')));


//STEP 3

// let x = function (string) {
//     let y = string.toLowerCase().match(/[aeiou]/g);
//     return y.length;
// }

// console.log(x(prompt('Enter a sentence')));


//STEP 4

// let source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let value = '';
// let id = function () {
//     for (let i = 1; i <= 8; i++) {
//         value += source[Math.floor(Math.random() * source.length)];
//     }
//     return value;
// }

// console.log(id());


//STEP 5

// let countries = function (x) {
//     let list = x.split(',');
//     let length = [];
//     let index = 0;

//     for (const val of list) {
//         length[index] = val.trim().length;
//         index++;
//     }

//     for (let i = 0; i < list.length; i++) {
//     if (list[i].trim().length === Math.max.apply(Math, length)) {
//         return list[i];
//         }
//     }    
// }

// console.log(countries(prompt('Enter a list of country names delimited by a comma.')));