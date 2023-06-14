// const object={
//     name:'ranjeet',
//     city:'lucknow'
// }
// for(k in object){
//     console.log(k);
// }

// const obj1={
//     rocket:'spaceX',
//     fuel:2,
//     config:{
//         name:'mars'
//     }
// }
// obj1.fuel=500;
// obj1['year']=3000;


// const obj2= new Object()  //Constructor
// obj2.redbook='📕'
// obj2.rocket='🚀'
// console.log(obj2);


// const power={
//     fly:true,
//     cordinate:Math.random()+10
// }
// const obj3=Object.create(power)
// console.log(obj3) // empty object
// console.log(obj3.cordinate) // but it will give answer
// console.log(Object.getPrototypeOf(obj3)); // it will print all prototype

// const obj4 = Object.create({})
// Object.defineProperty(obj4,'book',{
//     // icon:'💕'
//     get: ()=> '💕',
//     enumerable:true
// })
// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

// for(k in obj4){
    // console.log("value is :",k);
// }



// part 5
let pen='✒️'
const obj5={
    comic:'📚',
    pen:'',
    printComic: function(){
        this.pen='🖋️'
        console.log(this)
        // this reffer to a parent objects.
        // acessing our object pen not from above global pen
    },
    printaComic:()=>{
        // arrow function not have acesss of this 
        // this.pen='🖋️'
        console.log(this)
    }
}
// console.log(obj5)
console.log(obj5.printComic().printComic().printComic()); 
// chaing concept
// console.log(obj5.printaComic())

