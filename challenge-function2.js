// SOAL 1 MENGGUNAKAN FUNGSI EXPRESSION
console.log("-----------------------SOAL 1 MENGGUNAKAN FUNGSI EXPRESSION------------------------")
let dataName="Mia Silvia"
let dataLove = "Love Java Sript"
const myName = function(nama, age){
    return `Nama saya adalah ${nama} dan umur saya ${age}`;
}
let nameAndAge = myName(dataName,25);
console.log(nameAndAge); //nama dan umur
///////////////////////////////////////////
const changeToLength=function(toLength){
    return toLength.length;
}
let thisLength = changeToLength(dataName);
console.log(thisLength) //length
//////////////////////////////////////////
const upperCase = function(dataNameUpper){
    return dataNameUpper.toUpperCase();
}
let thisUpperCase = upperCase(dataName);
console.log(thisUpperCase); //uppercase
//////////////////////////////////////////
const firstString = function(toFirstString){
    return toFirstString.slice(0,1);
}
let thisFirstString = firstString(dataName);
console.log(thisFirstString); //huruf pertama
/////////////////////////////////////////
const firstName=function(toFirstName){
    return toFirstName.slice(0,3);
}
let thisFirstName = firstName(dataName);
console.log(thisFirstName);
//////////////////////////////////////////
const lastString = function(toLastString){
    return toLastString.slice(-1);
}
let thisLastString = lastString(dataName);
console.log(thisLastString); //huruf terakhir
/////////////////////////////////////////
const combideName = function(toCombideName){
    return toCombideName + " " + dataLove;
}
thisCombideName = combideName(dataName);
console.log(thisCombideName);
/////////////////////////////////////////

/////////////calculator//////////////////////
console.log("-----------------------SOAL 2 MEMBUAT FUNCTION KALKULATOR------------------------")
const num1 = 10;
const num2 = 2;
const operator = "+";
function calculator(num1,operator,num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "No falid, please input number";
    }else{}
  
if (operator == '+'){
     return num1 + num2;
}
else if (operator == '*'){
    return num1 * num2;
}
else if (operator == '-'){
    return num1 - num2;
}
else {
    return num1 / num2;
}
}

let result =calculator(num1,operator,num2);
console.log(result);