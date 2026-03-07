// how to define the funtion 
function sayMyName() {
    console.log("Raj Shekhar")
}
// how to use function  - by function call 
sayMyName();


// for printing counting number 

function printCounting(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
printCounting();

// for printing a given specific number

function printingNumber(num){
    console.log("Printing Number:", num)
}
printingNumber(45);

// for finding the average of given numbers

function getAverage(num1, num2){
    let avg = (num1 + num2)/2;
    console.log("Average:", avg);
}
getAverage(30, 7);

// for finding the sum of given numbers 

function getSum(a, b, c){
    let sum = a + b + c;
    return sum;
}

let ans = getSum(10, 20, 87);
console.log("Printing Sum:", ans);

// for the adding the any given name 

function getMyName(firstName, middleName, lastName){
    let fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}

let myself = getMyName("Raj", "Shekhar", "Patel");
console.log("Full Name:", myself);


