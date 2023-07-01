// I have to change all the placeholders in the input fields in contact page.

let newname=document.querySelectorAll('.enterName , .userName');
newname.forEach(element => {
    element.placeholder="FSJS 2.0"
});

let newemail=document.querySelectorAll('.enterMail , .userEmail');
newemail.forEach(element=>{
    element.placeholder="fsjs@ineuron.ai";
})

let newmessage=document.querySelectorAll('.enterMessage, .userMessage');
newmessage.forEach(element=>{
    element.placeholder="Hello World 🌍"
})