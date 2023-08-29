console.log("<-------------------------soal satu-------------------->");
console.log("----MANIPULASI STRING----")
let nama="Mia Silvia";
let love="Love Java Script";
function student(name){
let yourName = `${name}`;
return yourName;
}
console.log(student(nama));
console.log(student(nama.length)); //
console.log(student(nama.toUpperCase())); //huruf besar
console.log(student(nama.toLowerCase())); //huruf kecil
console.log(student(nama.slice(0,1))); //nama depan
console.log(student(nama.slice(0,3))); //nama depan
console.log(student(nama.slice(0,3)),love); //gabungan
console.log(student(nama.slice(-1))); //hutuf terakhir

console.log("----MENGUBAH TIPE DATA----");

function age(toNumber){
    let data = parseInt(toNumber);
    return data;
}
console.log(age("25")); 

function long(toFloat){
    let data = parseFloat(toFloat);
    return data;
}
console.log(long("170"));

console.log("----PENGECEKAN TIPE DATA----");

function cekTipeData(value){
let data = typeof(value);
return data;
}
console.log(cekTipeData(true));

console.log("----PENJUMLAHAN DAN PENGURANGAN----");

function penjumlahan(a,b){
    let sum = (a+b);
    return sum;
}
console.log(penjumlahan(10,5));

function pengurangan(a,b){
    let min=(a-b);
    return min;
}
console.log(pengurangan(10,5));

console.log("----PERKALIAN DAN PEMBAGIAN----");
function perkalian(a,b){
    let kali= (a*b);
    return kali;
}
console.log(perkalian(6,2));

function pembagian(a,b){
    let bagi=(a/b);
    return bagi;
}
console.log(pembagian(6,2));

console.log("----PANGKAT BILANGAN----");
function perpangkatan(a,b){
    let pangkat = (a ** b);
    return pangkat;
}
console.log(perpangkatan(3,4));

console.log("----RATA-RATA DARI ARRAY----");
function average(array){
let avg= array.reduce((a,b)=> a+b) / array.length;
return avg;
}
console.log(average([2,8,12,4,6]));

console.log("----BILANGAN GANJIL ATAU GENAP----");
function ganjilGenap(num){
    if (num %2 == 0){
        console.log("bilangan genap");
    }
    else{
        console.log("bilangan ganjil");
    }
    
}
ganjilGenap(7);

console.log("----RANDOM----");
function random(value){
    let rdm = Math.floor(Math.random()*5);
    return rdm;
}
console.log(random());

console.log("<-------------------------soal dua-------------------->");
console.log("---------Konversi Celsius ke Fahrenheit-------");


function konversi(celcius){
let fahrenheit =(celcius * (9/5)) + 32;
return fahrenheit;
}
console.log("hasil fahrenheitnya adalah", konversi(20));

console.log("<-------------------------soal tiga-------------------->");
console.log("--------PANGKAT SEDERHANA-------");
function pangkat(base,exponent){
let total= Math.pow(base,exponent);
return total;
}
console.log(pangkat(2,3));  //2 dipangkatkan 3

console.log("<-------------------------soal Empat-------------------->");
function vokal(num){
if (num.toUpperCase() == ["A" ||"I" ||"U"||"E"||"O"]){
    console.log("Ini adalah huruf vokal");
}
else{
    console.log("Ini bukan huruf vokal");
}
}
vokal("a");