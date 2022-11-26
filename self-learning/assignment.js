//value and variables
let country = "Indonesia";
let continent = "Kepulauan Riau";
let population = 2064564;

console.log(
  `saya tinggal di ${country}, ${continent}, jumlah penduduk ${population}`
);

//Data Types
let isLand = true;
let language;
console.log(typeof isLand); //typeof untuk menampilkan tipe data apa yang digunakan
console.log(typeof population);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof language);

//let, const, and var
language = "Indonesia"; //can re assign
const myName = "Reffan Agustian"; //can't redeclare and re-assign
let age = 21; //can't redeclare
var hewan = "kucing";
console.log(hewan);
var hewan = "anjing";
console.log(hewan);

//Basic operator
let number = 10;
console.log(number * 2);
number--;
console.log(number);
console.log(number > 98);
console.log(number < 98);
console.log(number <= 99);
console.log(number >= 87);

let gabungan = number + "Halo" + 1000;
console.log(gabungan);

//String and template literals
console.log(`nama saya adalah ${myName} umur = ${age}`);

//if else statements
if (number < 100) {
  console.log("yak betoll");
} else {
  console.log("Hahaha salah");
}

//type convension and coercion
console.log("9" - "5"); //string akan di convert menjadi number
console.log("19" + "13" + "17");
console.log("19" - "13" + "17");
console.log("10" * "10");
console.log("10" / "5");
console.log("10" < "11");
console.log(20 > "11");
console.log(1 + 2 + 3 + "100" + "9" - 1 - 2);

//equality operator === vs ==
let angka1 = 10;
let angka2 = 10;

console.log(angka1 == angka2);
console.log(angka1 === angka2);

for (let i = 0; i <= number; i++) {
  console.log(i);
}
