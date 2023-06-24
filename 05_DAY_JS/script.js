// alert('hello')
let myheros=['Father','Mother','Meitself'];
let dcheros=['Jocabsir','RajeevSir','MSD'];

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// here we are injecting a ranjeet property into the object 
Object.prototype.ranjeet= function(){
    console.log(`Ranjeet is present in all objects`);
}

Array.prototype.Heyranjeet=function(){
    console.log(`Ranjeet is present in all objects`);
}


myheros.ranjeet(); 


// inheritance
const User={
    name:"Top name",
    email:"topuser@gmail.com"
}
const Teacher={
    makevideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TeachingAssistent={
    makeAssingment:'Js assingment',
    fullTime:true,
    __proto__:TeachingSupport, // inherting all property of TeachingSupport
}

// let's binneded teacher and user
Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


// Goal : get TureLength of string 

String.prototype.truelenght=function(){
    console.log(`true length is : ${this.trim().length}`)
}
let myname="Ranjeet  singh   ";