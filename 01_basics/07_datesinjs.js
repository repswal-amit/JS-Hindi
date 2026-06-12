// Dates in JavaScript

let myDate = new Date();
console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(myDate.getUTCDay());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getUTCHours());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.getUTCMinutes());
// console.log(myDate.getUTCMonth());
// console.log(myDate.getUTCSeconds());
// console.log(myDate.getYear());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.valueOf());  

console.log(typeof myDate);
console.log(myDate instanceof Date);

let myCreatedDate = new Date('2020-01-01');
console.log(myCreatedDate);

'${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}';
console.log(`${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`);