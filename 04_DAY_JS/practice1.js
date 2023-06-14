// Objects Rivision

// Part 1

// const obj1={
//     name:'ranjeet',
//     lastname:'singh',
//     city:'lucknow'
// }
// obj1.city='Noorpur';
// obj1['Number']=1234567890;
// for(k in obj1){
//     console.log(k);
//     console.log(obj1[k]);
// }


// Part 2

//  Object using constructor
// const obj2=new Object()
// obj2.rocket='🚀';
// obj2.book='📚';
// console.log(obj2);  // whole object with curley backet
// for(k in obj2){
//     console.log(k);    // only keys of object
//     console.log(obj2[k]) // only value of object
// }


// Part 3
// Inhertinace in object
// const power={
//     fly:true,
//     coordinate:Math.random()+2
// }
// const obj3=Object.create(power);
// console.log(obj3); // Empty object
// // just like a child have property of parent but not visully visible but it has
// // those quality in prototype. 
// console.log(obj3.coordinate); // we can use this property
// console.log(Object.getPrototypeOf(obj3));


// // Part 4
// const obj4=Object.create({});
// Object.defineProperty(obj4,'book',{
//     get : ()=> '❤️',
//     enumerable:true
// })
// console.log(obj4)
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));
// for(k in obj4){
//     console.log(k);
// }


// Part 5
// let pen='🖋️';
// const obj5={
//     novel:'📕',
//     pen:'',
//     printComic: function (){
//         this.pen='✒️',
//         console.log(this.printComic);
//         // this reffer to a parent objects.
//         // acessing our object pen not from above global pen
//     },
//     printaComic : ()=>{
//         // arrow function not have acesss of this 
//         // this.pen='🖋️'
//         console.log(this)
//     }
// }
// console.log(obj5)
// console.log(obj5.printComic().printComic().printComic()); 
// //chaing concept
// console.log(obj5.printaComic())