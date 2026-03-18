async function getData() {
    setTimeout(function() {
        console.log("I am inside the Set Timeout Block")
    }, 5000);
}

let output = getData();


async function getMyData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await response.json();
    console.log( data );    
}
getMyData();