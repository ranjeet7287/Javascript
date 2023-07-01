// Task1
//  I have to add an element named "Hire Me" in the navigation menu.
let mylist=document.querySelector('nav ul');
let hireli=document.createElement("li");
hireli.innerHTML="<a> Hire Me </a>";
mylist.appendChild(hireli);



// Task2 
// I have to change the text inside search input field from "Search" to "Search My Project". 

// let input=document.querySelector('input');
// input.placeholder="Search My Project";
let searcholder=document.querySelector(".search-field input");
searcholder.placeholder="Search My Project";



// Task3 
// I have to change the paragraph text from "a Freelancer for National and International Client" to "an Employee for iNeuron Intelligence Pvt Ltd".
let heroSection=document.querySelectorAll(".hero-left-section p span");
heroSection[1].innerText="an Web Developer";
heroSection[2].innerText="iNeuron Intelligence Pvt Ltd"





// Task4 I have to change to image to Hitesh sir's image.
let sirimg=document.querySelector('.hero-right-section img');
sirimg.src="./person-image.jpg"


// Task5 I have to add another named "Support Me" beside the "Chat With Me" button.

//  create button
let btnsection=document.querySelector('.hero-right-section-btns');
let btn=document.createElement('button');
btn.innerText="Support Me";
btnsection.appendChild(btn);
