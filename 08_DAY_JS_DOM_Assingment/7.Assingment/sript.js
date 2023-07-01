// Task- 1: Remove the languages that have 2.0 in their name(Every alternative language)

const courses=document.querySelectorAll('.main__languages a');
courses.forEach((element)=>{
    if(element.innerText.includes("2.0")){
        element.style.display="none";
    }
})

// Task- 2:
let inputbox=document.querySelector('.main__form-input');
inputbox.disabled=false;
inputbox.value="JAI HIND";

let subbtn=document.querySelector('.main__form-btn');
subbtn.disabled=false;