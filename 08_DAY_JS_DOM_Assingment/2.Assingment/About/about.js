let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Task 1
// I have to add background color in the heading and description in the About page.
accordian.forEach((val)=>{
  val.style.backgroundColor="#9093f5"
})
let accordianPara=document.querySelectorAll(".accordian p");
accordianPara.forEach((val)=>{
  val.style.backgroundColor="#96d5f7"
})


