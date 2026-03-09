let obj = {
    name : "Raj Shekhar",
    age : 20,
    height : "5ft 11in",
    weight : 65,
    greet : function(){
        console.log("Ram Ram bhai sareya ne ");
    }
}

console.log(obj);
obj.greet();

console.log(typeof(obj))

// array : collection of items or elements

let arr = [1, 2, 4, 5, "raj", true];
console.log(arr); 

// array can be also searched by their indexing number 

let brr = [45, 'Raj', 'Rohit', true];
console.log(brr[2]);

// There are some built-in-methods in arrays are as follows:
//-push = insert at end 
//-pop = remove between item 
//-shift = remove the first item 
//-inshift = add the first item
//-slice = for making new part
//-splice = for changing the whole context means by use of splice you can insert, remove, replace any item 
//-map
//-filter
//


brr.push('shekhar');
brr.pop();
brr.shift();
brr.unshift('shekhar');
brr.push(20, 40, 90);
console.log(brr.slice(2,4));
brr.splice(1, 2, 'patel');
 
console.log(brr);

let hrr = [10, 20, 30];
let ansArray = hrr.map((number) => {
    return number*number;
})
console.log(ansArray);

let anssArray = hrr.map((number, index) => {
    console.log(number);
    console.log(index);
})

let mrr = [1, 2, 5, 10, 20, 30, 40, 50, 21, 43, 55];
let evenArray = mrr.filter((number) => {
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenArray);

let trr = [10, 20, 30, 40, 50];
let ans = trr.reduce((acc, curr)=> {
    return acc + curr;
}, 0);
console.log(ans);

let crr = [7, 3, 2, 1, 4, 5, 6, 8];
crr.sort();
console.log(crr);

console.log(crr.indexOf(7));

let drr = [45, 18, 7];
drr.forEach((value, index) => {
    console.log("Number:", value, "Index: ", index);
})

