//------------------------Add two strings in alternate order--------------------------------

// let str1= "abcde";
// let str2= "ghutyo";
// let newStr = "";

// let length =  Math.max(str1.length , str2.length);
// console.log(length);

// for(let i= 0 ; i <= length ; i++){

//     if(i < str1.length){
//         newStr += str1[i];
//     }

//     if(str2.length > i){
//         newStr += str2[i];
//     }

// }
// console.log(newStr); 







// ----------------------------------Sort an array in ascending order--------------------

// let arr = [5, 2, 8, 1, 4];
// let sortedArr = arr.sort((a,b) => a-b);
// console.log(sortedArr); // Output: [1, 2, 4, 5, 8]



// let arr2 = ["apple",  "cherry", "banana"];
// let sortedArr2 = arr2.sort();
// console.log(sortedArr2); // Output: ["apple", "banana", "cherry"]

// --------------------------------"use strict"------------------------------
// "use strict" --> It is a directive in JavaScript that enables strict mode, which helps catch common coding errors and "unsafe" actions such as defining global variables unintentionally. It can be used at the beginning of a script or a function to enforce stricter parsing and error handling on your JavaScript code.  

// "use strict";
// let a=100;
// console.log(a);

// ----------------Check the ouput of the below code-------------------
// have concept of let, var and const in js
// let- is block scoped and cannot be redeclared in the same scope. It can be updated but not redeclared.
// var- is function scoped and can be redeclared and updated. It can be accessed outside the block in which it is declared.
// const- is block scoped and cannot be redeclared or updated. It must be initialized at the time of declaration.

// undefined--> undefined is a variable that has been declared but has not yet been assigned a value. It is a primitive value in JavaScript.


// a=100;
// console.log(a); 

// let a ;
// console.log(a); 

// let b = null;
// console.log(b);

// ----------------------Promising------------------------

// A promise is a javascript object that reprsents the eventual success (resolves) or failure (rejects) of an asynchronous operation and its resulting value. It is a placeholder for a value that is not yet known but will be at some point in the future. Promises are used to handle asynchronous operations in JavaScript, such as API calls, file reading, etc.

// let promise = new Promise((resolve , reject) =>{

//     let success = true;
//     if (success) {
//     resolve("Promise is resolved")

//     } else {
//         reject("Promise is rejected")
//     }
// }
// )

// promise
// .then((result) => {console.log(result)})
// .catch((errpr) => {console.log(errpr)})
// .finally(() => {console.log("Promise is settled")})

// ------------------------------Async and Await------------------------

// Async and Await are used to handle asynchronous operations in JavaScript. They are built on top of promises and provide a more readable and concise way to work with asynchronous code.

// async function fetchData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }   



// -------------------------------Callback function------------------------

// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It is used to handle asynchronous operations in JavaScript.


// const  callbackFunction = (a , b , subtracting) => {
//     console.log("This is the main function.");
//     subtracting(a,b);
// }

// const subtracting = () => {
//     return a-b;
// }

// const result = callbackFucntion(10 , 5, subtracting)
// console.log(result); // Output: 5

// -------------------------------Question 1------------------------------

// if([]){
//     console.log('My name is Aakash');
// }
// else{
//     console.log('My name is not Aakash');
// }

// -------------------------Question2-------------------


// console.log([]==false);

// Here '==' is a loose equality operator that checks for value equality after converting the operands to a common type. In this case, both the empty array and false are converted to a common type (number) before comparison. The empty array is converted to 0, and false is also converted to 0. Therefore, the comparison returns true.
// This is why the output of the code is true.

// -------------------------------Question 3-------------------
// Here [] --> truthy value and ![] --> falsy value.
// console.log(false == ![]);


// ----------------------------------------------Question 4-------------------

// const arr= [1, 2, 3, 4, 5];
// const str = "1,2,3,4,5";

// console.log(arr==str); // Output: true

// --------------------------------Question 5-------------------

// const arr = "aakash";
// arr[2] = "R";
// console.log(arr); // Output: aakash



// --------------------------------Question 6-------------------

// const arr = [8,9,10,11]
// const [y] = arr;
// console.log(y)  // Output: 8

// -------------------------------Question 7-------------------
// Empty an Array using length property

// const arr = [8,9,10,11]
// arr.length = 0;
// console.log(arr)  // Output: TypeError: Assignment to constant variable.


// -------------------------------Question 8-------------------

// // Empty an Array with [] when it is declared with let and var but not with const
// var arr = [8,9,10,11]
// arr= [];
// console.log(arr)
// // Empty an Array using pop() method
// var arr1 = [8,9,10,11]
// while(arr1.length){
//     arr1.pop();
// }
// console.log(arr)


// --------------------------------Question 9-------------------
// First Order Functions: Functions that can be assigned to variables, passed as arguments to other functions, or returned from other functions.
// Example of First Order Function

// const greet = () =>{
//     console.log("Hello World");
// }

// const fucntion1 = (func)=>{
//     console.log("This is function 1");
//     func();
// }

// fucntion1(greet);

// Output: This is function 1
//         Hello World


// ----------------------------------Question 10-------------------

// Higher Order Functions: Functions that take other functions as arguments or return functions as their result.


// Example of Higher Order Function

// const add = (a, b) => {
//     return a + b;
// }

// function higherOrderFunction(func, a, b) {
//     return func(a, b);
// }

// higherOrderFunction(add, 5, 10); // Output: 15


// Map(): A higher-order function that creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.

// Example of Map()

// const num = [2,3,4,5,6]
// const square = num.map(i=> i * i)
// console.log(square)


// Output: [4, 9, 16, 25, 36]
// The original array num remains unchanged.


// filter(): A higher-order function that creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

// Example of filter()

const num = [22,34,6,54,23]
const somenumber = num.filter(i => i > 20)
console.log(somenumber)
// Output: [22, 34, 54, 23]
// The original array num remains unchanged.






