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
console.log("--------------KONVERSI MENGGUNAKAN FUNCTION BIASA-----------------")
function konversi(celcius){
    let fahrenheit =(celcius * (9/5)) + 32;
    return fahrenheit;
    }
    console.log("hasil fahrenheitnya adalah", konversi(20));


console.log("--------------KONVERSI ARROW FUNCTION-----------------")
let conversionArrow=(celcius)=> celcius * (9/5) + 32;
console.log("KONVERSI ARROW Hasilnya adalah : ", conversionArrow(20));

console.log("--------------KONVERSI Currying-----------------")
let x = 9/5;
let y= 32;
celcius2 = 10;
function conversionCurrying(celcius){
    return function (x){
        return function (y){
            return celcius2 * x + y;
        };
    };
};
console.log("KONVERSI Currying Hasilnya adalah ",conversionCurrying(20)(x)(y));