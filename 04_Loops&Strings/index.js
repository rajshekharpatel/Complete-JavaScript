//>>>>>>>>>>>>>>>>>>>>>>For Loop <<<<<<<<<<<<<<<<<<<<

for(let i=1; i<=4; i++){
    console.log("raj");
}

for(let i = 5; i>=1; i--){
    console.log(i)
}

for(let i=1; i<=6; i++){
    if(i==4)
        break;
    else
        console.log(i);
}

for(let i=1; i<=5; i++){
    if(i==3)
        continue;
    else
        console.log(i);
}

// >>>>>>>>>>>>>>>>>> While Loop <<<<<<<<<<<<<<<<<<<<<<<<<

let i = 1;
while(i<=6){
    console.log("raj shekhar")
    i++;
}

let a = 5;
while(a>=1){
    console.log(a)
    a--;
}

let x = 1;
while(x<=5){
    if(x==3)
        break;
    else
        console.log(x)
    x++;
}

let r = 1;
while(r<5){
    console.log("Inside the loop");
    if(r==3){
        r++;
        continue;
    }
    else
        console.log(r)
    r++;
}

//>>>>>>>>>>>>>>>>>> Do While Loop <<<<<<<<<<<<<<<<<<<<<<<<<

let b = 1;
do{
    console.log(b);
    b++;
}while(b<7);

// >>>>>>>>>>>>> Strings <<<<<<<<<<<<<<<<<<<<<

let firstName = "Raj Shekhar"
let lastName = "Patel"

console.log(firstName);
console.log(lastName);

let name = `My
name 
is
Raj Shekhar Patel
and
I'm
doing 
Javascript 
at 
this 
time`
console.log(name);

let myName = new String("Raj Shekhar");
console.log(myName);

// concatenation in string

let op1 = "Indian  "
let op2 = "Cricketer"

let ans = op1 + op2
console.log(ans);

let finalAns = `${op1}${op2};`
console.log(finalAns);

// finding the length of any given string 

console.log(op2.length);
console.log(op1.length);
console.log(name.length);

// how to change the case of string 

console.log(op1.toUpperCase());
console.log(op1.toLowerCase());

// method of subString in the strings 

let givenName = "Cricketer"
console.log(givenName.substring(2,5));

// how to split the Strings

let sentence = "Hello My name is \"Raj\" Shekhar Patel";

console.log(sentence);
let words = sentence.split('');

console.log(words.join(','));

console.log(words);