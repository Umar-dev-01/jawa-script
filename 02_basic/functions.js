/*
function sayHello(){
    console.log("Hello Umar");
}
sayHello()

function showName(name) {
    console.log(name)
}
showName("Muhammad Umar")



function printCity(){
    console.log("Rawalpindi");
}
printCity()



function printCountry(){
    console.log("Pakistan");
}
printCountry()
printCountry()


function showAge(age){
    console.log(age);
}
showAge(18)


function showCity(city){
console.log(city)
}
showCity("Lahore")


function greet(name){
    console.log("Hello "+name);
}
greet("Ali")



function add(a,b){
    console.log(a+b);
}
add(10,15)

function multi(a, b){
    console.log(a*b);
}
multi(6,7)


function introduce(name, age){
    console.log("My Name is "+(name)+" and I am "+(20)+" years old.");
}
introduce ("Umar", 20)



function square(num){
    return num*num;
}
let ans = square(5);
console.log(ans)



function cube(num){
   return num*num*num;
}
let result= cube(3);
console.log(result)


function fullName(firstName, lastname){
return (firstName+lastname);
}
let name = fullName("Muhammad ", "Umar");
console.log(name);



function isAdult(age){
    if(age>=18){
        console.log("true");
    }else if(age<18){
         console.log("false"); 
    } 
   
}
isAdult(89)


function isAdult(age){
    if(age>=18){
        return true;
    }else if (age<18){
        return false;
    }
}
let result= isAdult(7);
console.log(result)




function login(username){
    if(username=="Umar"){
        return "Welcome Umar";
    }else{
      return  "User not found"
    }
}
console.log(login("Umar"));


function login(username, password){
    if(username+password&&"Umar"+12345){
    return "Login Successful";
}else if(username!="Umar"){
    return "Invalid Username";
}else if(password!=12345){
    return "Invalid Password";
}
}
console.log(login("umar",12345))



function checkPin(pin){
    if(pin==1234){
        return "Access Granted";
    }else if(pin!=1234){
        return "Wrong PIN";
    }}
console.log(checkPin(1234))



function canVote(age){
    if(age >=18){
        return "You can vote"
    }else{
        return "You cannot vote"
    }
}console.log(canVote(10))


function checkTemperature(temp){
    if (temp>35){
        return "Hot";
    }else if(temp<15){
        return "Cold";
    }else{
        return "Normal";
    }
}
console.log(checkTemperature(41))


function checkResult(marks){
    if(marks>=50){
        return "Pass";
    }else {
        return "Fail";
    }
}console.log(checkResult(302))


function freeDelivery(amount){
    if(amount>=2000){
        return "Free Delivery";
    }else{
        return "Delivery Charges Apply";
    }
}console.log(freeDelivery(3000))


                      //////////////////////bhir hint 

function unlockPhone(pin){
    if(pin===7860){
        return "Phone Unlocked";
    }else{
        return "Incorrect PIN";
    }
}console.log(unlockPhone(7860))

function checkWinner(teamAScore, teamBScore){
    if(teamAScore>teamBScore){
        return "Team A Win";
    }else if(teamBScore>teamAScore){
        return "Team B Win";
    }else{
        return "Match Draw";
    }
}console.log(checkWinner(51,51))


                                               //////////////Scnerio 
function login(attempt){
    if (attempt===0){
return "Account Locked";
    }else if(attempt==1&&2){
        return "Last Attempts Remaining";
    }else if(attempt>=3){
        return "You Can Try Login";
    }else{
       return "invalid entry";
    }
}console.log(login(7))

function checker(plan){
    if(plan=="4Screens"){
return "Premium";
    }else if(plan=="2Screens"){
        return "Standard";
    }else if (plan=="1Screens"){
        return "Basic";
    }else{
        return "Invalid Plan";
    }
}console.log(checker("4Screens"));



function marks(obtiandMarks,totalMarks){
    return (obtiandMarks/totalMarks)*100+"%";
}console.log(marks(425,500))


function check(password){
    if(password==check.include("@")){
        return "Medium";
    }// ye bhi undefine a rha hy agr chal jata to wohi same logic agy else if lga deta 
 
    }
    console.log(check("@"));

    //Q5. serf function declear hy call nhen ho rha and hmesha wellcome print nhen kry 
    // ghlt matching py invaild dy ga 
    

function isEven(number){
    if(number%2==0){
         return "Even";
    }else{
        return "Odd";
    }
}console.log(isEven(7));

function coffee(size){
    if(size=="Small"){
        return "$3";
    }else if(size=="Medium"){
        return "$5";
    }else if(size=="Large"){
        return "$7";
    }else{
        return "Invalid Size"
    }
}console.log(coffee("Large"))

//////////////////////////////////////last
function user(balance,withdrawAmount){
if(balance<withdrawAmount){
    return "Transaction Failed";
}
else if(withdrawAmount<=0){
    return "Invalid Amount";
}else{
   return balance-withdrawAmount;
}
}console.log(user(5000,2000))
                                  ////////////////////////////soba

function shopping(productPrice, quantity){
    let result= productPrice*quantity;
    if(result>10000){
       let bill=  result*0.10;
     let totalBill= result-bill;
     console.log(totalBill);
    }else{
        return "Invaild Entry";
    }
}
shopping(2500,5);
                         
function registration(userName, password){
    if(userName.length < 4){
        return "Invalid Username";
    }else if(password.length < 8){
        return "Weak Password";
    }else{
        return "Registration Successful";
    }
}console.log(registration("23333","pjhcfxg"));


function login(password){
    if(password.includes("@") && password.includes("#") && password.length>8){
        return "Strong Password";
    }else{
        return "Weak Password";
    }
}console.log(login("@we#dddddddddw"));

//////////////////////////////////////////////last
function order(restaurantOpen, riderAvailable,orderAmount){
if(restaurantOpen == "false"){
    return "Restaurant Closed";
}else if(riderAvailable==false){
    return "No Rider Available";
}else if(orderAmount<500){
    return "Minimum Order is 500";
}else{
    return "Order Confirmed";
}
}console.log(order("true",false,600));

function calculator(num1, num2, operator){
    if(operator==="+"){
        return num1+num2;
    }else if(operator==="-"){
        return num1-num2;
    }else if(operator==="*"){
        return num1*num2;
    }else if(operator==="/" && num2===0){
        return "Cannot Divide by Zero";
    } else if(operator==="/"){
        return num1/num2;
    }else if(operator==="%"){
        return num1%num2;
    }else if(operator==="square"){
        return num1*num1;
    }else if(operator==="cube"){
        return num1*num1*num1;
    }
    else{
        return "Invalid Operator";
    }
}console.log(calculator(2,0,"cube"));



function showCar(car){
    console.log(car.company);
    console.log(car.model);
}
   const car = {
    company: "Toyota",
    model: "Corolla"
}; 
showCar(car)


function showPhone(Phone){
   console.log(Phone.company);
      console.log(Phone.model);
}
    const Phone={
company:"Samsung",
model:"s24"
};showPhone(Phone)

                            /////////////////////////toady
function showStudent(student){
console.log(student.name)
console.log(student.semester)
console.log(student.cgpa)
}
    let student={
 name: "Ali",
semester: 2,
cgpa: 3.8,
};
showStudent(student)

function showLaptop(laptop){
console.log(.brand)
console.log(.brand)
console.log(.brand)
}
let laptop={
    brand: "HP",
ram: "16GB",
price: 120000
};showLaptop(laptop)

function checkUser(user){
if(user==="true"){
    return "Welcome Umar";
}else{
  return  "Please Login";
}
}let user={
username: "Umar",
isLoggedIn: true,
};console.log(checkUser("true"))

function checkProduct(product){
if(product>0){
    return "In Stock";
}else{
  return  "Out of Stock";
}
}
let product={
name: "Mouse",
stock: 0,
};console.log(checkProduct(10))


function login(account){
 if(account.account!=account.account){
    return "Invalid Email";
}else if(account.password!=account.password){
    return "Invalid Password";
}   else{
  return "Login Successful";
}
}
let account={
email: "umar@gmail.com",
password: "12345"
};console.log(login("umar@gmailcom",1245 ))
*/
function withdraw(account){
    if(account.withdrawAmount >account. balance){
        return "Insufficient Balance";
    }else{
       return "Remaining Balance: "+account.balance-account.withdraw;
    }
}
let account={
    name: "Umar",
balance: 5000,
withdrawAmount: 6000,
};console.log(withdraw())
