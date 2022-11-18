// ● Write a code to convert celsius to fahrenheit.
let celcius = 25;
let fahrenheit = (celcius * 9/5) + 32;

console.log(`${celcius} celcius = ${fahrenheit} fahrenheit`);

// ● Write a code to check whether the number is odd or even
const number = 9;

number % 2 == 0 ? console.log(`${number} adalah bilangan genap`) : console.log(`${number} adalah bilangan ganjil`);

// ● Write a code to check whether the number is prime number or not

let arr1 = [1,2,3,4,5] //baris
let obj1 = {
    nomor1 : 1, nomor2 : 2, nomor3: 3 , nomor4 : 4 , nomor5: 5
} //ciri2

let orang1 = {
    warna_tas : "coklat", 
    warna_sepatu: "biru"
}
let orang2 = {
    warna_tas : "hijau", 
    warna_sepatu: "merah"
}

let barisMeja = [orang1,orang2]

console.log(barisMeja);

console.log(barisMeja[0].warna_sepatu)

// ● Write a code to find the sum of the numbers 1 to N.
    // ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let sum = 0;
let text = `${number} -> `

for(let i = 1 ; i <= number ; i++){
    if(i == 1){
        text += `${i}`
        console.log(text);
    }
    else{
        text +=   ` + ${i}`
        console.log(text);
    }
    sum += i;
} 
console.log(text + " = " + sum);


// ● Write a code to find factorial of a number.
// ● Write a code to print the first N fibonacci numbers