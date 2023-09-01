console.log("-----------------------SOAL 2 MEMBUAT FUNCTION KALKULATOR------------------------")
const num1 = "10";
const num2 = 2;
const operator = "/";

/////////////////////////////////////

let calculator2=(num1,operator,num2)=>
typeof num1 !== "number" || typeof num2 !== "number"?"No falid, please input number":
operator == '+'? num1 + num2:
operator == '*'? num1 * num2:
operator == '/'? num1 / num2:
operator == '-'? num1 - num2:
"hehe"
console.log(calculator2(num1,operator,num2));

//////////////////////////////////////

