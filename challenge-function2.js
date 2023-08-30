
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
