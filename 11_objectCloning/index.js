// Object cloning 
//Example of Spread Operator 


let source = {
    age: 21,
    weight: 65,
    height: 171,               
}

let destination = {...source};
source.age = 40;

console.log("source:", source);
console.log("destination:", destination);


// Example of Assign Method 

let src ={
    age: 45,
    weight: 87,
    height: 878,
}

let dest = Object.assign({}, src);

src.height = 6776;

console.log("src:", src);
console.log("dest:", dest);

// one more method for object cloning is iteration but there is very complex method so we don't use whereas we use spread operator or assign method


