// Rest And Spread
// try and catch
// promises 


// Spread and Rest
// both of them are denoted by ...
// When we are sperading something and sending the data it will be called as Spread Operator.
// When data is comeing and collecting them inside something like array is called as Rest.

// Spread
// function sumone(x,y){
//     return x+y;
// }

// let vari=[5,7];
// console.log(sumone(...vari));

// // Rest
// function sum(...args){
//     console.log(args);
//     let sum=0;
//     for(const x of args){
//         sum=sum+x;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,0));


// Try and Catch

// Syntax

//Code that you want to check wheather it going to run onto the server or not
// try{
//     //  logical errror not be dispalyed into the browser
//     console.log(Ranjeet);

// }catch(err){
//     // if some error in the try code it will return our error handling message.
//     console.log(err.name,"Variable name is mmissing");
// }


// try{
//     let firstname="Ranjeet";
//     console.log(firstname+""+lastname)
// }catch(err){
//     console.log(err.name,"Variable name is mmissing");
// }finally{
//     // regardless of error you are getting or not it will run
//     console.log("I will run BENSTOKE!!")
// }

// CONCEPT OF THROW EXPLORE THIS

// Diffrent type of error in js
/*
    3 error
    -Reffrence Error
    -Syntax Error
    -Type Error

 */

// Promise
// -pending
// -fullfilled
// -rejected


// Event Loop

// task 1 complete not depended
// const userOne=()=>{
//     console.log("Hello One")
// };

// // task 2  depended upon settime time out  
// const userTwo=()=>{
//     setTimeout(()=>{
//         console.log("INSIDE FUNCTION 2")
//     },2000)
//     console.log("Hello Two");
// };

// // task 3 
// const userThree=()=>{
//     console.log("Hello Three");
// };
// userOne();
// userTwo();
// userThree();

// TASK A coming in a queue one by one they are complete



// promise
const one= ()=>{
    return "I am one";
};

const two= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Credential Resolve");
        },2000);
    })
};

const three=()=>{
    return "Redirect to home page"; 
};

//  async whenever you need a syncorinesd way of output
const callMe= async()=>{

    let valOne=one();
    console.log(valOne);

    let valTwo=await two();
    console.log(valTwo);

    let valThree=three();
    console.log(valThree);

}

callMe();

