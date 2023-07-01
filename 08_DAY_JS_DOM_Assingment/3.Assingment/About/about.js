let accordian = document.querySelectorAll(".accordian h3");

// Task 1
// I have to add background color in the heading and description in the About page.
accordian.forEach((val)=>{
  val.style.backgroundColor="#9093f5"
})
let accordianPara=document.querySelectorAll(".accordian p");
accordianPara.forEach((val)=>{
  val.style.backgroundColor="#96d5f7"
})

// Task 2
// I have to add a new "Skills" section in About page.
let accordianwrapper =document.querySelector('.accordian-wrapper');
let Skill=document.createElement('div');
Skill.className="accordian";
accordianwrapper.appendChild(Skill)


const skillsHeading = document.createElement("h3");
skillsHeading.innerText = "Skills";
Skill.appendChild(skillsHeading);
const skillsDescription = document.createElement("p");
skillsDescription.innerText = "I posses a very good command over the full stack development technologies like MERN which can be seen in my work over Github.";
Skill.appendChild(skillsDescription);



const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");
accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));

accordianHeading.forEach((element) => {
  element.addEventListener("click", () => {
    const para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

