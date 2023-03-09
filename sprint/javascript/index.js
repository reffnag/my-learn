//Hello World

console.log("Hello World");

//data type number
console.log(100);
console.log(4.4);
console.log(1);
console.log(0xff); //hexadecimal
console.log(0b1001); //biner
console.log(0o10); //oktal

//data type boolean
console.log(true);
console.log(false);

//data type string
console.log("Hello World Guys");
console.log("OHH YEAHHH, oo");
console.log("Hello" + " YOO");

//variable(var, let, const)
var name = "James";
name = "Otong";
var name = "ba"; //redeclare
console.log(name);

let joke = 1;
joke = 3; //update the value(reassign)
// let joke = 4 //can't redeclare
console.log(joke);

const yap = 12;
// yap = 13; //can't reassgin
console.log(yap);

//arithmetic operator
const a = 1 + 2;
console.log(a);
let b = 4 + 5;
b += 6;
b *= 2;
console.log(b);

//unary operator
b++; //increment + 1
console.log(b);
b--; //deccrement -1
console.log(b);
b = -30; // negatif
console.log(b);
b = +30; //positif
console.log(b);

//comparisson operator
let c = 30;
let d = b == c;
console.log(d);
d = b != c;
console.log(d);
c++; // c = 31
d = b < c;
console.log(d);
d = b > c;
console.log(d);

//logical operator
let NilaiUjian = 80;
let NilaiKehadiran = 90;

let LulusUjian = NilaiUjian >= 75;
let LulusKehadiran = NilaiKehadiran >= 75;

let Lulus = LulusUjian && LulusKehadiran;
console.log(Lulus); //AND
console.log(!Lulus); // Unary !
Lulus = LulusUjian || LulusKehadiran;
console.log(Lulus); //OR
