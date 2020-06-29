//Without "new" keyword
function Cat(name){
    let instance = Object.create(Cat.prototype);
    instance.name = name;

    return instance;
}
Cat.prototype.greet = function(){
    console.log("I'm a cat, my name is: " + this.name);
}

let kiki = Cat("Kiki");
kiki.greet();

//Using "new" keyword
function Dog(name){
    this.name = name;
}
Dog.prototype.greet = function(){
    console.log("I'm a dog, my name is: " + this.name);
}
let simba = new Dog("Simba");
simba.greet();

//Using "class" keyword
class Tiger{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("I'm a tiger, my name is: " + this.name);
    }
}
let wild = new Tiger("Wild");
wild.greet();