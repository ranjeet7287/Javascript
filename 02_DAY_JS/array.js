// let name=["ranjeet","harmeet","jaspreet","atharva","shashank"]
// console.log(name)
// console.log(name[3])
// console.log(name.length)

// console.log(name[name.length-1]);

// name[4]="doctor ji";
// console.log(name)


// let names=new Array('Name 1','Name 2')
// console.log(names);
// names.push('bawa');
// console.log(names);


// Slice -> if we want to acess multiple value from the array

// let arr=[1,2,3,4,5];
// console.log(arr.slice(1,4));  // silce(start_index,end_index-1)

// Splice 

// let fruit=["Apple","Bada Apple","Chota Apple","Double Apple"];
// fruit.splice(2,0,'Kaharab Apple','Acha Apple');
// console.log(fruit);
// fruit.splice(2,1,'Kaharab Apple','Acha Apple');
// console.log(fruit);


// Concatination

// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// let arr3=[9,10,11,12];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2,arr3));


// fill

// let arr=[1,2,3,4,5,6,7,8];
// arr.fill('ranjeet',2,4);
// console.log(arr);


// include
// let num=[1,2,3,4,5,6,7,8];
// console.log(num.include(7));


// indexof 
// let num=[1,2,3,4,5,6,7,8];
// console.log(num.indexOf(4));


// isArray
// let num=[1,2,3,4,5,6,7,8];
// console.log(Array.isArray(num)); 


// join - > conert into string
// let arr=[1,2,3,4,5,6,7]
// console.log(arr.join(' ran '))


// lastindexof
// let num=[1,2,8,3,4,5,8,6,7,8,5,3,2,5];
// console.log(num.lastIndexOf(8));


// map
// let maths=[1,4,9,16,25];
// console.log(maths.map(Math.sqrt));


// pop
// let num=[1,2,3,4,5,6,7,8,9,10];
// console.log(num.pop()); // delete the value from the last index
// console.log(num);


// reverse
// let num=[1,2,3,4,5,6,7,8,9,10];
// console.log(num.reverse());


// shift() - > like a pop but from the first index
// let num=[1,2,3,4,5];
// console.log(num.shift());

// sort
// let num=[5,6,3,4,2,1];
// console.log(num.sort());


// unshift --> it will from the starting index
// let fruit=["Apple","Bada Apple","Chota Apple","Double Apple"];
// fruit.unshift('mitha apple','khata apple');
// console.log(fruit);


// Converting to array
// let name="Ranjeet";
// let arr=name.split('');
// console.log(arr);


// forof
// let fruit=["Apple","Bada Apple","Chota Apple","Double Apple"];
// let upperfruit = [];

// for(const badaletter of fruit){
//     upperfruit.push(badaletter.toUpperCase());
// }
// console.log(upperfruit);


// break and continue
// for(let i=0;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// for(let i=0;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }



