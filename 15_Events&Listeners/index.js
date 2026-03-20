//let fpara = document.getElementById('fpara');
//fpara.textContent = "Hello Raj Shekhar"

function changeText(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Raj Shekhar"
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);

// by the help of add and remove text we change the work of listener 


let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "Ho gaya bhai"
});


let paras = document.querySelectorAll('p');

for(let i=0; i<paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', function() {
        alert("You have clicked on para:" +i);
    })
}

