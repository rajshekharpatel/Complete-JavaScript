//Global scoping

age = 21;
console.log(age);

{
    console.log(age);
}
if(true){
    console.log(age);
}
for(let i=0; i<2; i++){
    console.log(age);
}

function sayHello(){
    console.log("Hello", age);
}
sayHello();

//Function Scoping

function sayHii() {
    var name = 'Earth';
    console.log("Hello ",  name);
}
sayHii();

// Block Scoping

{
    const myAge = 87;
}
console.log(myAge);


/// >>>>>>>>>>>>>>> Temporal Dead Zone  <<<<<<<<<<<<<<<<<<<<<

// its simply known as mtlb ki variable create karne se pahle isko call nahi karna hota hai agr aisa karte ahi to wo temporal dead zone me aa jata hai 


//console.log(marks);
const marks = 100;
console.log(marks);
