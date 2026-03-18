// there is a code1

const t1 = performance.now()

for(i=0; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " +i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time taken by code1 is: " +(t2-t1));

// there is a second code 

const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i=0; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " +i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time taken by code2 is: " +(t4-t3));



// What is Reflow ?
// It is a process of calculating the position or dimensions of element.
// It is also a Computationally intensive task.

// What is Repaint ?
// It is the process of dispalying content or element pixel by pixel. 
// It is faster than the Reflow process.

// What is Document Fragment ?
// It is the type of process in  which there are no reflow and no repaint for the below lines.


let Fragment = document.createDocumentFragment();

for(let i=0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is a Para " +i;
    Fragment.appendChild(para);
}

//the below line takes 1 reflow and 1 repaint 
document.body.appendChild(Fragment);

