// //what is the class in js
// //a blueprint for creating objects 
// // class Person{
// //     constructor(name,age){
// //         this.name=name;  //this -> the name that belongs to that object
// //         this.age=age;
    
// //     }
// //     greet(){
// //         console.log(`Hello, my name is ${this.name}`)
// //         console.log(`My age is ${this.age}`)
// //     }
// // }
// // const user=new Person('Abdulrahman',22)
// // user.greet();


// class user{
//     constructor(name){
//         this.name=name;
//     }
//     sayname(){
//         console.log(this.name+` This is my name`);
//     }

// }
// const u=new user('Abdulrahman')
// u.sayname();



// class counter{
//     constructor(){
//         this.value=0
//     }
//     increment(){
//         this.value++;
//     }

// }
// const c=new counter();
// console.log(c.value);
// c.increment()
// console.log(c.value)
// c.increment()
// console.log(c.value)
// Fake HTML (like a real website)
const {JSDOM}=require('jsdom')
const html = `
<!DOCTYPE html>
<html>
  <body>
    <h1>Login</h1>

    <form id="loginForm">
      <input type="text" name="username" value="admin" />
      <input type="password" name="password" value="1234" />
      <button>Login</button>
    </form>
  </body>
</html>
`;

// Create DOM
const dom = new JSDOM(html);

// Access document
const document = dom.window.document;

// 🔍 Extract values
const username = document.querySelector('input[name="username"]').value;
const password = document.querySelector('input[name="password"]').value;

console.log("Username:", username);
console.log("Password:", password);