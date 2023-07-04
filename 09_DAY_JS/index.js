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
// const count=[
//     "India",
//     "Srilanka",
//     "Nepal",
//     "Bhutan",
//     "Mayanmar",
//     "Bangladesh",
//     "Afgannistan",
//     "Pakistan",
//     "China"
// ];

// const store=count.filter((val)=>val.includes("stan"))
// console.log(store); 

// Reduce
// const num=[1,2,3,4,5,6,7];
// const sum=num.reduce((accu,curr)=> accu+curr,0);
// console.log(sum);

// Analogye 
// accumilator -> accu (are like collecting wapper form student)
// Current -> curr (are like student in line)
// intail -> 0 intail value


// find 
// every 
// some

// Sort
// const names=["Ranjeet","Manav","Atharv","Akshay","Shashank"];
// console.log(names.sort());
// console.log(names.reverse());



// de-structuring , Spread and Rest

// const sci =[2.72,3.14,9.81,37,100];
// let [e,pi,grav,bodytemp,boiltemp]=sci;
// console.log(e,pi,grav,bodytemp,boiltemp);


// to skip
// const arr1=[1,2,3];
// let [var1, ,var2]=arr1;
// console.log(var1,var2);

// const arr2=[1,2,3,4,5,6,7,8];
// let [num1,num2,...rest]=arr2;
// console.log(num1,num2);
// console.log(rest);