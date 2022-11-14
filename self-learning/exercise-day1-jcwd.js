//write a code to find area of triangle
let alas, tinggi;
alas = 10;
tinggi = 12;

let luas = alas * tinggi * 0.5;

console.log(`Jadi luas segitiga adalah ${luas}cm`);

//write a code to find perimeter of rectangle
let panjang = 15;
let lebar = 9;

let keliling = 2 * (panjang + lebar);
console.log(`keliling persegi panjang adalah ${keliling}cm`);

//write a code to find diameter, circumference and area of circle
let r = 7; //r = jari-jari lingkaran
let phi = Math.PI;
let diameter = r * 2;
console.log("dimater lingkaran adalah " + diameter + 'cm');

keliling = phi * diameter;
console.log(`keliling lingkaran adalah ${Math.round(keliling)}cm`);

luas = phi * (r**2);
console.log(`Luas lingkaran adalah ${Math.round(luas)}cm`);


//write a code to find angles of triangle if two angle are given
let angle1 = 80;
let angle2 = 40;

let angle3 = 180 - (angle1 + angle2);
console.log(`jadi sudut yang tidak diketahui adalah ${angle3}cm`);

//write a code switch case day and a code to get difference beetween in days
let date = new Date();
console.log(date);

switch (date.getDay()) {
    case 0: //case 0 = sunday
        console.log("This is Sunday");
        break;
    case 1:
        console.log("This is Monday");
        break;
    case 2:
        console.log("This is Tuesday");
        break;
    case 3:
        console.log("This is wednesday");
        break;
    case 4:
        console.log("This is Thursday");
        break;
    case 5:
        console.log("This is Friday");
        break;
    case 6:
        console.log("This is Saturday");
        break;
    default:
        break;
}

//diffdate
const date1 = new Date("11/14/2022");
const date2 = new Date("11/01/2022");

console.log(`${date1} and ${date2}`);

let diffdate = date1 - date2;
console.log(diffdate);

diffdate = Math.round(diffdate) / (1000 * 3600 * 24);
//1000 is milisecond to second
//3600 is second to hour
//24 is hour in 1 day
console.log(diffdate);
console.log(`the different day of day1 ${date1} and ${date2} is ${diffdate} days`);


//Write a code to convert days to years, months and days
const totaldays = 1000;

let year = Math.floor(totaldays / 365); //total days in 1 year
let mounth = Math.floor(totaldays % 365 / 30); //% 365 / 30 to get mounth
let days = Math.floor(totaldays % 365 % 30); //formula to get days
console.log(`${totaldays} days is a ${year} years ${mounth} mounth ${days} days `);

//mengubah nilai resistor dari ohm ke K ohm

let resistor = 10; //ohm

let ubah = 10 / 1000; //ohm ke k ohm di bagi 1000

console.log(`${resistor} ohm = ${ubah} kilo ohm`);
