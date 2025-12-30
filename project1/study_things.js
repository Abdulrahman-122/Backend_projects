//what is the class in js
//a blueprint for creating objects 
// class Person{
//     constructor(name,age){
//         this.name=name;  //this -> the name that belongs to that object
//         this.age=age;
    
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name}`)
//         console.log(`My age is ${this.age}`)
//     }
// }
// const user=new Person('Abdulrahman',22)
// user.greet();


class user{
    constructor(name){
        this.name=name;
    }
    sayname(){
        console.log(this.name+` This is my name`);
    }

}
const u=new user('Abdulrahman')
u.sayname();



class counter{
    constructor(){
        this.value=0
    }
    increment(){
        this.value++;
    }

}
const c=new counter();
console.log(c.value);
c.increment()
console.log(c.value)
c.increment()
console.log(c.value)
