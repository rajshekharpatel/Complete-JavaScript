let firstPromise = new Promise( (resolve, reject) => {
    console.log("Raj Shekhar");
});

let firstPromiseForResolve = new Promise( (resolve, reject) => {
    console.log("Raj Shekhar");
    resolve(500);
});

let firstPromiseForReject = new Promise( (resolve, reject) => {
    console.log("Raj Shekhar");
    reject(new Error("Internal Server Issue"));
});


setTimeout (function sayMyName() {
    console.log("My name is Raj Shekhar");
}, 10000);


let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Promise FulFilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise1.then((message) => {
    console.log("Then ka message is " +message);
}).catch((error) => {
    console.log("Error: " + error);
})