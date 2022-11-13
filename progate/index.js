//implementasi penggunaan switch case 
//program berat badan

let berat = 70;

switch(berat){
    case 60:
        console.log("Kamu berat");
        break;
    
    case 70:
        console.log("Kamu obet");
        break;
}

// switch case
// write day a code 

const day = "sunday";

switch(day){
    case "monday":
        console.log("monday");
        break;

    case "tuesday":
        console.log("tuesday");
        break;

    case "wednesday":
        console.log("wednesday");
        break;

    case "thursday":
        console.log("thursday");
        break;

    case "friday":
        console.log("friday");
        break;

    case "saturday":
        console.log("saturday");
        break;

    case "sunday":
        console.log("sunday");
        break;
}

//if else statement 
//scorechecker

const score = 90;

if(score == 100){
    console.log("Verry Good");
}
else if(score <= 99 && score >= 90){
    console.log("Good");
}
else if(score <= 89 && score >= 80){
    console.log("Nice Try");
}
else{
    console.log("Try Again");
}


//loop
//write a code hospital program to klinik A dan ke klinik B

for(let i = 1 ; i <= 20 ; i++){
    if(i % 2 == 0){
        console.log(`Pasien ke = ${i} ke klinik B `);
    }
    else{
        console.log(`Pasien ke = ${i} ke klinik A `);
    }
}

//loop
//write a code odd or even
for(let i = 1 ; i <= 20 ; i++){
    i % 2 == 0 ? console.log(`${i} adalah angka genap`) : console.log(`${i} adalah angka ganjil`);
}