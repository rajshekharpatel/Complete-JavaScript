
function sayMyName(finalName) {
    console.log(finalName);
}
sayMyName("Raj Shekhar Patel");

var age = 22;
console.log(age);


// In the term of hoisting there is only simple funtion and variable can be declared otherwise funtion, const, and class cannot be declared as well as var and function

class Human {

}
const object1 = new Human ();

function greetMe(greet, fullName){
    console.log("hello ", fullName);
    greet();
}

function greet() {
    //console.log("Greetings for the day to all of you");
    console.log("MahaShivratri ki aap sabhi ko dhero shubhkamnaye");
    //console.log("Jay Mahakal");
}

greetMe(greet, "Raj Shekhar");


function solve(number) {
    return function(number) {
        return number*number;
    }
}
let ans = solve(5);
let finalAns =ans(12);
console.log(finalAns);


const arr = [
    function(a, b) {
        return a+b;
    },
    function(a, b) {
        return(a-b);
    },
    function(a, b) {
        return(a*b);
    },
    function(a, b) {
        return(a/b);
    }
]
let first = arr[3];
let anss = first(100, 20);
console.log(anss);


let obj = {
    age: 21,
    weight: 65,
    height : 171,
    greetWe: () => {
        console.log("Hello Dunia ke logo")
    }
}
console.log(obj.age);
obj.greetWe();