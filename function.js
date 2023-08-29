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
