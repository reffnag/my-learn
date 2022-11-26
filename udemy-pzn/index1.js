//STRING TEMPLATE//
const firstName = "Reffan";
const lastName = "Agustian";
const text = `nama saya ${firstName} 
${lastName} `;

console.log(text);

//KONVERSI STR DAN NUMBER//
console.log(parseInt("2"));
console.log(parseFloat("3.3"));
console.log(eval("1112"));
console.log(Number("11"));

let a = 4;

Number.toString(a);

console.log(a);

let b = "Reffan";

console.log(b.length);
console.log(Number("Reffan 1"));
console.log(Number("22"));

b = Number("agus");
console.log(isNaN(b));

//TIPE DATA ARRAY//
//array dimulai dari index 0
let arrayKosong = [];
console.log(arrayKosong);

arrayKosong.push("Reffan"); //menambah value "Reffan"
console.log(arrayKosong);

arrayKosong.push("Agustian", 02); //menambah value "Agustian" dan 02
console.log(arrayKosong);

arrayKosong[0] = "Irna";
console.log(arrayKosong[0]);

delete arrayKosong[0];
console.log(arrayKosong);
console.table(arrayKosong);
console.log(arrayKosong.length);

arrayKosong[0] = "Reffan";
console.log(arrayKosong);

let buah = ["Jambu", "Jeruk", "Apel"];
console.log(buah); //value yang didalam array
console.log(buah[0]); //array index 0
console.log(buah[2]);
console.table(buah); //.table membuat table untuk melihat index array

//TIPE DATA OBJECT//
const testObject = {};
console.log(testObject);
testObject["Nama"] = "Reffan Agustian";
testObject["usia"] = 21;
testObject["tanngal lahir"] = "08/02/2001";

console.log(testObject);
console.table(testObject);

delete testObject["usia"];
console.table(testObject);

let peserta = {
  Nama: "Reffan",
  alamat: "Batam",
  usia: 21,
};
console.table(peserta);

console.log(peserta.Nama);
console.log(peserta.usia);

//IF EXPRESSION//
if (peserta.usia >= 20) {
  console.log("kamu sudah dewasa");
} else if (peserta.usia <= 19 && peserta.usia >= 15) {
  console.log("kamu masih remaja");
} else {
  console.log("kamu masih anak anak");
}

//POPUP//
// //alert("Halo"); //harus di jalankan di html dan browser

// let nama = prompt("Masukkan nama anda");
// alert(`selamat datang ${nama}`);

// const masuk = confirm("Do you want to get in");

// if (masuk) {
//   const name = prompt("Who's your name ?");
//   alert(`Hello ${name}`);
// } else {
//   alert("Bye Bye");
// }

//UNDEFINIED//
//tidak terdefinisi berrt tidak memiliki nilai
let tidakTerdefinisi;
// tidakTerdefinisi = 12;

console.log(tidakTerdefinisi === undefined);

tidakTerdefinisi === undefined
  ? console.log("undefinied")
  : console.log("defined");

let data1 = [1, 2, 3];
console.log(data1);

console.log(data1[0] === undefined);

//NULL//
//data kosong
data1 = [4, 5, 6];
console.log(data1);
data1 = null;

data1 === undefined ? console.log(undefined) : console.log(null);

//SWITCH STATEMENT//
//statement percabangan, hanya untuk kondisi ==
let nilaiSaya = "A";

switch (nilaiSaya) {
  case "A":
    console.log("Anda lulus");
    break;
  case "B":
    console.log("Anda tetap lulus");
}

//TYPEOF//
console.log(typeof data1);
console.log(typeof nama); //tidak didefinisikan
console.log(typeof a);

if (typeof data1 === "object") {
  console.log("object");
} else {
  console.log("bukan object");
}

//OPERATOR IN//
let test = "Nama" in peserta;
console.log(test);

//TENARRY OPERATOR//
let value = 90;

value = 90
  ? console.log("Selamat anda lulus")
  : console.log("sile cobe lagi lah");

//NULLISH COALESCING OPERATOR//
value = value ?? console.log("Nilai Default");

//OPTIONAL CHAINING//
let testAja = {};

let testAja1 = peserta.Nama;
console.log(testAja1);

let testAja2 = {
  nama: "reffan",
  Asu: {
    nama: "jancok",
  },
};

console.log(testAja2);
let testAja3 = testAja2.babi?.nama;
console.log(testAja3);

//Falsy and Truthy
//data falsy
/*
false
0 / -0
str kosong
null
undefinied
Nan
*/
let testFalshy = false;
if (testFalshy) {
  console.log("True");
} else {
  console.log("False");
}
//data truthy
let testTruthy = true;
if (testTruthy) {
  console.log("True");
} else {
  console.log("False");
}

//OPERATOR LOGIKA NON BOOLEAN
console.log("Reffan" || "");
console.log("Reffan" && "");
console.log("" || {});
console.log(`` || []);
console.log("0" || "NOL");

let testMateri29 = {
  firstName: null,
  lastName: "Agustian",
};

let testMateri = testMateri29.firstName ?? testMateri29.lastName;
console.log(testMateri);

//FOR LOOP//
for (let i = 1; i < 10; i++) {
  console.log(i);
}
