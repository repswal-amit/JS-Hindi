// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const jsuser = {
    name : "Amit",
    "Full name" : "Amit Repswal",
    [mySym] : "mykey1",
    age : 22,
    location : "Jhunjhunu",
    email : "Amit@gmail.com",
    isLoggedin : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "Amit@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "Amit@google.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
    
}

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());