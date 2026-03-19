// there are two types are error occurred: 
//Compile time error 

//Syntax error
//console.log(1;

// Runtime error 
// reference error 
//console.log(x);

// how to check error 

try{
    console.log("try block starts here ");
    console.log(x);
    console.log("try block ends here");
}
catch(err) {
    console.log("I AM INSIDE CATCH BLOCK")
    console.log("Your error is here: ", err );
}

finally{
    console.log("I will run everytime, as i am finally block")
}

//try{
    //console.log(x);
//}
//catch(errr) {
    //throw new Error ("kya haal chal launde");
//}

//try{
  //  console.log(x);
//}

//catch(err) {
  //  throw new Error ("There is a error in this code")
//}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json");
}