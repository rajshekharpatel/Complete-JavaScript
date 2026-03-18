class Human {
    age = 21;// this is a public element
    #weight = 65; // now this is a private element
    height = 171;

    walking(){
        console.log("I am walking")
    }

    running() {
        console.log("I am running")
    }

    get fetchWeight(){
        return this.#weight;
    }

    set modifyWeight(val){
        this.#weight = val;
    }
}

let obj = new Human();
console.log(obj.age);

obj.walking();

// default parameters

function sayName(myName = "Raj Shekhar"){ // This is a work as default parameters if you can not set the value or doesn't call the function
    console.log("My name is:", myName);
}
sayName("raj");

