//MANIPULASI STRING
console.log("--------------MANIPULASI STRING-----------------");

let name = "Mia Silvia";  //ini adalah variabel name
let length = name.length; //untuk menghitung jumlah name
let upper = name.toUpperCase(); //untuk merubah menjadi huruf kapital
let lower = name.toLowerCase(); //untuk merubah menjadi huruf kecil
let love= "Love Java Script";

console.log("Nama Lengkap:", name);
console.log("Jumlah Nama :", length);
console.log("Huruf Kapital :", upper);
console.log("Huruf kecil :", lower);
console.log("Huruf Pertama :", name.slice(0,1));
console.log("Nama Depan :", name.slice(0,3));
console.log("Gabungan :", name.slice(0,3), love);
console.log("huruf terakhir :", name.slice(-1));

