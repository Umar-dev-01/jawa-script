/*
const data = '{"name":"Umar","age":20,"city":"Rawalpindi"}';
console.log(JSON.parse(data));
let {name, city}=data;
console.log(name);
console.log(city);



const student = {
  name: "Sana",
  semester: 2,
  cgpa: 3.65
};
console.log(JSON.stringify(student))


let login={
email : "umar@gmail.com",
password :"12345",
rememberMe : true,
}
console.log(JSON.stringify(login));


{
  "name" = "Ali",
  "age"= 22,
  "isStudent"= true
}

const user = {
  name: "Umar",
  age: 20
};
const data = JSON.stringify(user);
const newUser = JSON.parse(data);
console.log(newUser);
// String
// String
//Umar

*/

let Mobile={
    IMEIno:209664,
buttons:[1,2,3,4],
company:"QMobile",
model:2001,
batteryHealth:"90%",
};
console.log(JSON.stringify(Mobile));
console.log(JSON.parse(Mobile));
let {company, model}=Mobile;
console.log(company);
console.log(model);