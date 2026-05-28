const name = "Amit"
const repoCount = "100"

// console.log(name + repoCount + "valus");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("GTA")

console.log(typeof gameName);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("T"));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,3)
console.log(anotherString);

const newStringOne = "   Hello World   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.codewithamit.com"
console.log(url.replace("amit","Amit"));

console.log(url.includes("codewithamit"));

console.log(gameName.split("T"));