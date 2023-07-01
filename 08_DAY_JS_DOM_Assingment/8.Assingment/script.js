// Task 1
// I have to add new text to the side bar and I have to add scroll to it.

let aside=document.querySelector('aside');

let line=document.createElement('hr');
line.className='hr-line';

let sideheading=document.createElement('h2');
sideheading.className="new-head";
sideheading.innerText='How to improve Devlopement ?';

let sidepara=document.createElement('p');
sidepara.className="new-p";
sidepara.innerText="Simple way  improve is to do read documentation and take good source to learn and do multiple project ";

aside.appendChild(line);
aside.appendChild(sideheading);
aside.appendChild(sidepara);

aside.style.overflowY="scroll";


// Task 2
// I have to remove the background image from the body.
let bodyback=document.querySelector('body');
bodyback.style.backgroundImage="none";

// Task 3
// I have to add functionality to the Navbar toggle button.
let togglebtn=document.querySelector(".navbar-toggler");
let navlist=document.querySelector("#navbarTogglerDemo01");
togglebtn.addEventListener("click",()=>{
    navlist.classList.toggle("collapse");
});