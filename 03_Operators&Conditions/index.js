console.log("raj")
 
let a = 10;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// these are the some operators that operates the things according to given operators.

a = a+10
a += 10;
console.log(a);

console.log(239 > 34);
console.log(239 < 34);
console.log(239 <= 34);
console.log(239 >= 34);

// These are the some comparision symbols that compares the numbers.

console.log(5 == 5)
console.log(5 === 5)

let age = 39;
let statusOfAgeCriteria = (age>18) ? 'I can Vote' : 'I cannot vote';
console.log(statusOfAgeCriteria);

let answer1 = (true && true && true)
console.log(answer1);
// agar statement me and ka use ho raha hai to kahi bhi ek false hua to pura statment false ho jayega 

let answer2 = (false || false || false)
console.log(answer2)
// agar statement me or ka use ho raha hai to kahi bhi ek true hua to pura statement true hoi jayega 

let answer3 = !(false);
console.log(answer3)
// it is a very simple type of operation in which jo bhi karenge aur uskeaage not laga denge to pura statement opposite ho jayega 

// try some Non-Boolean terms 
console.log(false && 'raj')
console.log(false || 'raj')
console.log(false || 9)

let myAge = 15;
if(myAge >= 18){
    console.log("Can Vote" );
}
else{
    console.log("Cannot vote");
}

let number = 15;
if(number == 1){
    console.log('Hey');
}
else if(number == 2){
    console.log('Hello');
}
else if(number == 3){
    console.log('Hiiii');
}
else if(number == 4){
    console.log('Bye');
}
else if(number == 5){
    console.log('Thank You');
}
else{
    console.log('Fuck You');
}


// try with one more example of if-else-if statement

let score = 4;
let yourAge = 915;
if(score == 1){
    console.log('Instagram')
}
else if(score == 2){
    console.log('Snapchat');
}
else if(score == 3){
    console.log('Whatsapp');
}
else if(score == 4){
    if(yourAge > 18){
        console.log('I can Vote');
    }
    console.log('Facebook');
}
else{
    console.log('Twitter');
}

let marks = 5;
switch(marks){
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
    case 4 : console.log('raj');
    break;
    default : console.log('you');
}