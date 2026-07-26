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


function shopping(productPrice, quantity){
    return productPrice*quantity;
}
let bill= (shopping(2500,5))
console.log(bill);
let totalBill= bill*0.10;
console.log(bill-totalBill)

*/

//true,keon k age brri hy 18 sy
//  false keon age choti hy 18 sy



