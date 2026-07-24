
/*let user= {
    name : "Umar",
age : 20,
city : "Lahore"
};
console.log(user)

console.log(user.name)
console.log(user.city)
user.Profession = "Student",
console.log(user)


user.age=21,
console.log(user)

//delete.user(city)
//console.log(user)


let user = {
    name: "Ali",
    age: 22
};

console.log(user.name);
console.log(user["age"]);
//'Ali'
//22

let user = {
    "full name": "Muhammad Umar"
};
console.log(user["full name"]);
//Muhammad Umar


let user = {
    name: "Ali"
};
Object.freeze(user);
user.name = "Ahmed";
console.log(user);
//name: 'Ali'

let user = {
    name : "Umar",
    age :20
}
console.log(user.name)
user.city = Lahore,
Object.freez(user)

// Object aur Array me kya difference hai?
// Dot notation aur bracket notation me kab use karte hain?
// Object.freeze() ka real-life use kya ho sakta hai?
object keys and keys ka data store krny k liy use hota hy jo k ksi ek entity ki information hota
array differnt attribute store krny k liy use hota hy 
dot notation choti value ko call krny k liy or brackt notation jin values mnn space ho onhen call keny k liy 
object freeze ka real life men nhen pta lkn programing mn frezz kr deta hy keys ki value ko phir wo change nhen ho MediaStreamTrackEvent
// bonus waly ka ans (. notation keon k value mn space nhen hy)





let student = {
    name: "Umar",
    age: 20
};
student.age=21,
student.Smester= 6,
delete student.name,
console.log(student)

Q2
'Toyota'
 'Toyota'
 'Corolla '

 let Book ={
title : "JavaScript",
Author : "Hitesh",
Price : 1500,
 }
 Book.Price =1800
 Book.pages = 500
 delete Book.Author
 console.log(Book)

 Q4
  name: "Ali"
  city = "Lahore"

let mobile = {
name : "Samsung",
price : 50000,
}
console.log(mobile["price"])
Object.freeze(mobile)
mobile.name = "iPhone",


//console men kesy kron 
 
let laptop ={
Brand: "Apple",
Model:"c9g13",
RAM : 256,
Storage:"8GB",
Price:"120k"
}
laptop.RAM= 512
laptop.warranty= "5 Years"
delete laptop.price
Object.freeze(laptop)
laptop.Brand= "hp"
console.log(laptop)

Q8
'Umar'
'age'
'Umar'
'age'


let University={

Name: "Umar",
Semester: 4,
CGPA: 3.2,
Department:"IT",
}
console.log([University.Name])
console.log([University.CGPA])


let employee = {
    name: "Ali",
    salary: 80000
};
employee.salary=90000
employee.department="IT"
//print krny ka to nae kha lkn pta kesy chly ga k  update hoia sb
console.log(employee)

//last ans (Umar, Umar, Umar)





let user = {
    name: "Umar",
    age: 20
};
let key = "name";
console.log(user[key]);
console.log(user.key);
Umar 
undefined

let user = {
    city: "Lahore"
};
console.log(user.country);
console.log(user["country"]);
undefined
undefined

let user = {
    name: "Ali"
};
Object.freeze(user);
user.name = "Ahmed";
user.city = "Islamabad";
console.log(user);
//name: "Ali"
//city = "Islamabad"

let student = {
    name: "Umar",
    cgpa: 3.4
};
console.log(student["cgpa"])

let laptop = {
brand : "HP",
ram : "8GB"
}
console.log(laptop.brand);
Object.freeze(laptop);
laptop.Price = 120000;
delete laptop.ram;



//10
// undefined
// 10
// undefined

let employee = {
    name: "Ali",
    salary: 80000
};
employee.salary=90000;
employee.Department="IT";
Object.freeze(employee)
employee.salary=100000;
console.log(employee)

// Umar 
// undefine
//  undefine 
//  Umar



let  Student={
Name :"Umar",
Age : 20,
City : "Lahore",
};
Student.Age=21;
Student.Semester = 4;
delete Student.City;
Object.freeze(Student);
Student.Name = "Ali";
console.log(Student)

let Mobile={
Brand: "red",
Model:302,
Price:1390,
};
Mobile.Color = "Black";
Mobile.Price=1550;
Object.freeze(Mobile);
Mobile.Warranty = "1 Year";
console.log(Mobile);


let Employee={
Name: "MMM",
Salary: 15000,
Department: "Finance"
};
Employee.Salary=20000;
Employee.Experience = "2 Years";
delete Employee.Department;
Object.freeze(Employee);
Employee.Salary= 30000;
Employee.Experience = "5 Years";
console.log(Employee)

let Laptop={
Brand:"Apple",
RAM:"8GB",
Storage:"45GB",
Price:95000,
Processor:"8GB",
};
Laptop.RAM="10GB";
delete Laptop.Price;
Laptop.Warranty= "5years";
console.log(Laptop);





                            //////////////////partttttttttttttt   2 


                                
let person= {
Name : "Umar",
Age : 20,
Country : "Pakistan",
};
console.log(person)



let user= new Object();
user.Brand = "Apple";
user.Model = "MacBook Pro";
user.RAM = "16GB";
console.log(user)


let Student={
Name :"Umar",

Address:{
    City : "Lahore",
    Country: "Pakistan",
    PostalCode : 54000,
}
}
console.log(Student.Address.Country)
console.log(Student)



let student1={
Name :"Umar",
}
let student2={
Age : 20,
}
console.log(...student1, ...student2)

let car={
Brand: "GLI",
Model:2016,
Color:"white",
Price:"3M"
}
console.log(Object.keys(car))



let car={
Brand: "GLI",
Model:2016,
Color:"white",
Price:"3M"
}
console.log(Object.values(car))




let car={
Brand: "GLI",
Model:2016,
Color:"white",
Price:"3M"
}
console.log(car)



let user={
Name: "Malik",
Email:"malik@gmail.com",
Password:32984,
} ;
console.log(user.hasOwnProperty("Name"));
console.log(user.hasOwnProperty("Phone"))


let Course={
CourseName : "JavaScript",
Price : 999,
Teacher : "Hitesh",
}
let {CourseName, Teacher}= Course;
console.log(CourseName)
console.log(Teacher)




let Name={
RollNumber: 001,
Semester: 5,
Department:"IT",
}
Name.Semester=6;
Name.Email="malik@gmail.com",
delete Name.Department;
console.log(Name)



let web={
ProductName:"Dress",
Price:200,
Brand:"LV"
}
web.Price=1200;
web.colour="white";
Object.freeze(web);
web.Warranty="4years";
console.log(web)




let employee={
Name:"Mando",
sallery:400,
Address:{
City:"ISB",
Country:"Pak",
}}
employee.Address.PostalCode=9234;
employee.Address.City="TLG";
console.log(...employee.Name, ...employee.sallery)



let object1={
Name:"Malik",
Age:22,

object2:{
CGPA:3.25,
University:"AIOU",
}};
let object3={
  Name:"Malik",
Age:22, 
 CGPA:3.25,
University:"AIOU"
}
console.log(object1)
console.log(object3)


let mobile={
    Brand:"Nokia",
Model:302,
Price:5000,
Color:"Black",
Storage:"2GB",
}
console.log(key(mobile))
console.log(value(mobile))
console.log(mobile)


let login={
    Username:"delta",
Email:"delta@gmail.com",
Password:123,
};
console.log(hasOwnProperty("Email"))
    //mojhy lgta if condition lgy gi
console.log(hasOwnProperty("Phone"))


let Course={
 CourseName:"Math",
Teacher:"Tahira",
Duration:"2Month",
Fee:14000,
};
let {CourseName, Teacher}= Course;
console.log(CourseName)
console.log(Teacher)



let employee={
Name:"Ranrra",
Salary:700,
Department:"Transport",
Office:{
City:"ISB",
Floor:2,
}};
employee.Salary=800;
employee.Office.CabinNumber=13;
delete employee.Department;
Object.freeze(employee);
console.log(employee.companyName)

                       //////////////////// last
let student={
Name:"Malik",
RollNumber:2,
Semester:4,
Department:"CS",
Result:{
    CGPA:3.2,
TotalMarks:"80%",
}};
student.Semester=5;
//student.Semester.Result.ObtainedMarks=100;
delete student.Department;
Object.freeze(student);
student.Email= "malik@gmail.com";
let {Name, Semester}=student;
console.log(Name);
console.log(Semester);



let product={
ProductName:"mobile",
Price:6000,
Brand:"QMobile",
Stock:2009,
Seller:{
Name:"Randwa",
City:"TLG",
}};
product.Price=7000;
product.Seller.City="Pich";
product.wrranty="lifeTime";
console.log(Object.hasOwnProperty("Discount"));
console.log(Object.keys(product))
console.log(Object.values(product))




let patient={
Name:"sab",
Age:56,
Medical:{
BloodGroup:"A+",
Disease:"CP",
}};
patient.Disease="HeartAttak";
patient.Medical.Doctor="BrDig. Salman";
let {Name, Age}=patient;
console.log(Name)
console.log(Age);
console.log(Object.entries(patient));




let Employee={
Name:"XYZ",
Salary:20000,
}
let Office={
Department:"IT",
Floor:2,
City:"ISB",
}
let data.({},...Employee,  ...Office);
console.log(data)
data.(Object.hasOwnproperty(Salary));
console.log(Salary);
console.log(Object.keys(data))


let account={
AccountHolder:"Awan",
Balance:300000000000000,
AccountNumber:"PK04ASCBL908766",
Branch:{
Name:"I-14",
City:"ISB",
}};
account.Balance=400000000;
account.Branch.Manager="Rahol";
Object.freeze(account)
account.Balance=50000000;
account.Branch.City="RWlp";
console.log(account);
//Socho: Freeze nested object ko bhi protect karta hai ya sirf outer object ko?
//nested ko bhi, lkn ye toka lga rha hon baki correct idea nhen hy





let Course={
CourseName:"Web Develp",
Duration:"3months",
}
let Instructor={
Teacher:"Ayesha",
Experience:"3years",
}
let Marged={
    Object.Marged(...Course, ...Instructor);
   // let {Teacher, CourseName}=Marged;
    console.log(Teacher);
    console.log(CourseName);
}


let Company={
 Name:"Umar",
 Founded:2003,
 Employees:{
CEO:"xyz",
CTO:"ABC",
HR:"LMN",
 Address:{
 City:"ISB",
Country:"PAK",
}}}
Company.Employees.HR="yador";
Company.Employees.Address.PstleCode=5098;
console.log(Object.hasOwnProperty("Revenue"));
console.log(Object.keys(Company));
console.log(Object.values(Company));
let {Name, Founded}=Company;
console.log(Name);
console.log(Founded);
console.log(Company);


let SchoolManagement={
SchoolName:"horio",
Principal:"OstadGi",
Students:{
Student1:"Rahol",
Student2:"Dodina",
teachers:{
Math:"Moda",
English:"doda",
}}}
SchoolManagement.Students.Student2="Biswas";
SchoolManagement.Students.teachers.Physics="Rabia";
SchoolManagement.EstablishedYear=2007;
console.log(Object.hasOwnProperty("Library"));
console.log(Object.keys(SchoolManagement));
console.log(Object.values(SchoolManagement));
let {SchoolName, Principal}=SchoolManagement;
console.log(SchoolName);
console.log(Principal);
Object.freeze(SchoolManagement);
SchoolManagement.Principal="Mian";
console.log(SchoolManagement);



let employee={
Name:"Malik",
Salary:20000,
Department:"Accoutants",
Office:{
City:"ISB",
Floor:1,
}};
employee.Salary=25000;
employee.Office.CabinNumber=2;
console.log(employee.hasOwnProperty("Email"));
let {Name, Salary}=employee;
console.log(Name)
console.log(Salary)


*/
let Company={
Name:"Umsha",
Founded:"Awan",
Employees:{
     CEO:"Malik",
    CTO:"Rimsha",
    HR:"Diver",
},
Address:{
City:"ISB",
Country:"PAK",
}}