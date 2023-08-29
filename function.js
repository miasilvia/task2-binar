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

