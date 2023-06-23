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
Object.prototype.ranjeet= function(){
    console.log(`Ranjeet is present in all objects`);
}
myheros.ranjeet();