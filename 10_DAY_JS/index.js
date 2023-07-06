// Object Method
let userDetails={
    firstname:"Ranjeet",
    lastname:"Singh",
    wesite:"MyHome.in",
    courselist:[],
    buyCourse:function(coursename){
        this.courselist.push(coursename);
    },
    getCourseCont:function(){
        return `${this.firstname} is enrolled in ${this.courselist.length}`;
    }
};
userDetails.buyCourse("FSJS2");
console.log(userDetails.getCourseCont());