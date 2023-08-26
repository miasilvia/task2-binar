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

//MENGUBAH TIPE DATA
console.log("---------------MENGUBAH TIPE DATA---------------------")
let umur = "25";
let tinggi="170";
console.log("umur" + " " + parseInt(umur));
console.log("Tinggi" + " " + parseFloat(tinggi));

//PENGECEKAN TIPE DATA
console.log("----------------PENGECEKAN TIPE DATA------------------")
let typeData1 = true;
let typeData2 = 123;
let typeData3 = "hallo";
let typeData4;
let typeData5 = ["sapi","kuda","kucing"];

console.log(typeof typeData1); //ini type data boolean
console.log(typeof typeData2); //ini type data number
console.log(typeof typeData3); //ini type data string
console.log(typeof typeData4); //ini type data undefined
console.log(typeof typeData5); //ini type data object

//NUMBER PENJUMLAHAN DAN PENGURANGAN
console.log("-----------------PENJUMLAHAN DAN PENGURANGAN--------------");
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);

//PERKALIAN DAN PEMBAGIAN
console.log("-----------------PERKALIAN DAN PEMBAGIAN------------------");
let num3 = 6;
let num4 = 2;
console.log(num3 * num4);
console.log(num3 / num4);

//PANGKAT BILANGAN
console.log("---------------------PANGKAT BILANGAN---------------------");
let base = 3;
let exponent = 4;
console.log(base ** 4);

//RATA-RATA DARI ARRAY
console.log("--------------------RATA-RATA DARI ARRAY-----------------");
let array = [2,8,12,4,6];
let average = array.reduce((a,b)=> a+b) / array.length;
console.log("Nilai Averagenya adalah : ", average);
