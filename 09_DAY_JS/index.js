// HOF 
// CALLBACK
// function is calling a function

// Higher order function are functions which take over other function as a parameter or return a 
// function as a value. The function passed as a parameter is called callback

// function a(){
//     console.log("I was called by a function");
// }
// function b(){
//     a();
// }

// b();


// mini program
// const callback= function(n){
//     return n*2;
// }

// function abc(){   // no parameter
//     callback();  //  no return a function as a value 
// }

// function cube(callback,n){  // parameter
//     return callback(n)*n;  // return a function as a value
// }
// console.log(cube(callback,2));


// For Each

// const arr=["hey","hi","hello","khalsha ji"];
// arr.forEach(myfun);
// function myfun(value){
//     console.log(value);
// }



// const arr=["hey","hi","hello","khalsha ji"];
// forEach() is HOF , the () =>{} inside it is callback
// arr.forEach((element)=>{   =
//     console.log(element);
// })


// SetTimeOut
// setTimeout(()=>{
//     console.log("Hello FSJS 2")
// },3000);

// function Mayur(){
//     console.log("Hello FSJS 2")
// }
// setTimeout(Mayur,3000);


// setInterval(()=>{
//     console.log("❤️ 🌍") // after every one sec it will print this 
// },1000)

// ForEach
// See Above

// map
// 1 Example
// const num=[1,2,3,4,5,6,7];
// const numSqr=num.map((num)=>{ return num*num;},)
// console.log(numSqr);

// 2 Example
// const num=[1,2,3,4,5,6,7];
// const numSqr=num.map((num)=>num*num);
// console.log(numSqr);

// filter



// reduce
// find 
// every 
// some
// sort



