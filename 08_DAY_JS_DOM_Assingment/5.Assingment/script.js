// Task 1 changing color of navlink
let navlink=document.querySelectorAll('.nav-links a')
navlink.forEach((element)=>{
    element.style.color="#8e2beb";
})

// Task 2 adding one more button
let nav=document.querySelector('.nav-center div:nth-child(3)')
let probtn=document.createElement('a');
probtn.href='#';
probtn.className="btn";
probtn.innerText="Pro Subscription"
nav.appendChild(probtn);


// Taks 3 add Punjabi recipe into the Recipe list
let recipelist=document.querySelector('.tags-container div');
let punjabiItem=document.createElement('a');
punjabiItem.href='#';
punjabiItem.innerText="Punjabi(13)";
recipelist.appendChild(punjabiItem);

// Task 4 adding card 
let recipegallery=document.querySelector('.recipe-gallery');

let carddiv=document.createElement('div');
carddiv.className='card';

let cardAlink=document.createElement('a');
cardAlink.href='#';
cardAlink.className='recipe-text';

let recipeimg6=document.createElement('img');
recipeimg6.src='./img/recipe-1.jpeg';
recipeimg6.className='.recipe-img ';

let recipeheading=document.createElement('h5');
recipeheading.innerText="Punjabi";
recipeheading.className="recipe-name"

let recipepara=document.createElement('p');
recipepara.innerText="Prep : 15min | Cook : 30min";
recipepara.className="recipe-disp";

carddiv.appendChild(cardAlink);
cardAlink.appendChild(recipeimg6);
cardAlink.appendChild(recipeheading);
cardAlink.appendChild(recipepara);
recipegallery.appendChild(carddiv);
