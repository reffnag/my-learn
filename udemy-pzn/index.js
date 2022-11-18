//1. PROGRAM HELLO WORLD//
console.log("Hello World");


//2. KOMENTAR //
//ini komentar
/* ini komentar
lebih dari satu baris*/


//3. TIPE DATA//
//number
console.log(10);
console.log(20.50);
console.log(0xFF); //hexadecimal
console.log(0o1); //oktal
console.log(0b11011); //biner
//boolean
console.log(true);
console.log(false);
//string
console.log("ini tipe data string");
console.log(`ini string`);
console.log('ini juga string');


//4. VARIABLE//
var fullName = "Reffan Agustian"; //var bisa di redeclare dan di re assign
console.log(fullName);

let namaLengkap = "Reffan Agustian"; //let bisa di re assign
console.log(namaLengkap);

const age = 21; //const tidak bisa di re assign apalagi di declare ulang
console.log(age);

console.log("nama saya " + namaLengkap + " umur saya " + age + " tahun" );


//5. OPERATOR ARITMATIKA//
console.log(1 + 2);
console.log(2 - 4);
console.log("reffan" - "reffan");

let a = 3;
let b = 4;

console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(b % a);

a += 1; //augmented assignment
console.log(a);

console.log(+a);//unary +a
console.log(-b);//unary -a
b++ //increment = +1
console.log(b);
b-- //decrement = -1
console.log(b);


//6. OPERASI PERBANDINGAN//
//hasil dari operator perbandingan adalah boolean
a = 5
b = 5

c = a == b;//sama dengan
console.log(c);

a = 2;
b = 4;

c = a < b;//lebih kecil dari
console.log(c);

c = a > b;//lebih besar dari
console.log(c);

c = a !== b;//tidak sama dengan
console.log(c);

c = a <= b;//lebih kecil dari sama dengan
console.log(c);

c = a >= b;//lebih besar dari sama dengan
console.log(c);


//7. OPERATOR LOGIKA//
//hasil dari operator logika adalah boolean
const nilaiA = 90;
const nilaiB = 80;
/*Logika AND (&&)
apabila kondisi 1 dan 2 true maka hasilnya true
selain itu nilainya false
*/
if(nilaiA >= 75 && nilaiB >= 75){
    console.log("lulus");
}
else{
    console.log("maaf coba lagi");
}
/**
 * Logika OR (||)
 *apabila salah satu kondisi true maka hasilnya true
 */
if(nilaiA <= 75 || nilaiB >= 75){
    console.log("Lulus banget");
}
else{
    console.log("haha coba lagi");
}
/**
 * Logika Unary (!)
 * adalah kebalika dari nilai 
 * jika true hasilnya false 
 * jika false hasilnya true
 */
let hasil = nilaiA == nilaiB;
console.log(!hasil);

hasil = nilaiA > nilaiB;
console.log(!hasil);


//8. CONSOLE//
console.info("nama saya reffan");//info aja
console.warn("peringatan");//peringatan
console.error("error");//pesan error
console.debug("Gedebug")//debug pesan

