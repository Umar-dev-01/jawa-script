/*
let student={
Name:"Umar",
Age:22,
Marks:72,
};
let sum= student.Marks+15;
console.log(sum)
let ageIncrease=student.Age+1;
console.log(ageIncrease)
student.Percentage="72%";
console.log(student)


var num1=73;
var num2=91;
let sum=num1+num2;
console.log(sum)
let  sub=num1-num2;
console.log(sub);
let mulp=num1*num2;
console.log(mulp);
let div=num1/num2;
console.log(div);
let reminder=num1%num2;
console.log(reminder)
let Power=num1**num2;
console.log(Power);
let SuqureRoot=num1*num1;
console.log(SuqureRoot)



let date = new Date();
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toDateString());


//Q4. react pta hi nhen hy mojhy kesi hoti hy 
//bootstrap wi nhen prrhi, agr prrhi hy to btao men ny to ap sy cpp,html,css sekhi and abhi j.s kr rha hon 




let Frontend=["j.s", "HTML", "CSS", "CPP"];

let Backend=["PHP", "NOde.JS"];
let Murged=[...Frontend, ...Backend]
console.log(Murged.length);
let arr1=[100,200,300];



let object1={
Employee:12,
Name:"Umar",
Salary:20000,
Office:"H13",
City:"ISB",
Floor:"G",
}
object1.Salary=25000;
object1.Office.cabin=2;
console.log(object1.hasOwnProperty("Email"));
console.log(Object.keys(object1));
console.log(Object.values(object1));
let {Name, Salary}=object1;
console.log(Name);
console.log(Salary);


let Student={
Name:"Umar",
Semester:4,
}
let Result={
CGPA:3.2,
Marks:"77%",
}
let Murge={...Student, ...Result};
Murge.CGPA=3.3;
console.log(Murge.hasOwnProperty("Department"));
console.log(Murge);


let array=[
 {Name:"Ali",Marks:80},
 {Name:"Umar",Marks:95},
 {Name:"Ahmed",Marks:70}
]
console.log(array[1]);
array.array[2].Marks=79;
array.array[3]={Name:"Bilo",Marks:10};
console.log(array);


*/
let stu1={
Name:"Umar",
Age:22,
Semester:4,
Marks:"67%",
Subjects:["Math" ,"English", "Cyber"],
Address:{
City:"ISB",
Country:"PAK",
}};

let stu2={
Name:"Umar",
Age:22,
Semester:4,
Marks:"67%",
Subjects:["Math" ,"English", "Cyber"],
Address:{
City:"ISB",
Country:"PAK",
}};

let stu3={
Name:"Umar",
Age:22,
Semester:4,
Marks:"67%",
Subjects:["Math" ,"English", "Cyber"],
Address:{
City:"ISB",
Country:"PAK",
}};
stu1.Semester=5;
stu2.gmail="xyx@gmail.com";
stu3.Marks="70%";
stu1.Subjects=["Phy"];
stu2.Address.PostleCode=3098;
console.log(stu1.hasOwnProperty("Phone"));
console.log(Object.keys(stu1));
console.log(Object.values(stu2));
console.log(Object.entries(stu3));
let {Name, Marks}=stu3;
console.log(Name);
console.log(Marks);
console.log(stu1);



