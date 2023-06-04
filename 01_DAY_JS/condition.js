// Codition

// 1.if else
let x=18;
if(x >= 18){
    console.log('allowed to give vote')
}else{
    console.log('not allowed to give vote')
}

// Rating app
let rating=5;
if(rating==5){
    console.log("5 star")
}else if(rating==4){
    console.log("4 star")
}else if(rating==3){
    console.log("3 star")
}else{
    console.log('Good');
}

// 2.Switch case

let user = 'admin';
switch(user){
    case 'admin':
        console.log('Redirect to admin page');
        break;
    case 'mentor':
        console.log('Redirect to mentor page');
        break;
    default:
        console.log('Redirect to Guest page'); 
}

// 3.Ternary operator / ternary condtion
// Condition ? true : false
let raining=true;
raining ? console.log("rain today") : console.log('No rain today');
