//code challange #1
//test data 1
let marksWeight = 78;
let marksHeight = 1.69;
let marksBMI = marksWeight / marksHeight ** 2;
console.log(marksBMI);

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);
//test data 2
// let marksWeight = 95;
// let marksHeight = 1.88;
// let marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// let johnWeight = 85;
// let johnHeight = 1.76;
// let johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);

// const markHigherBMI = marksBMI > johnBMI;
// console.log(markHigherBMI);

//code challange #2
if (marksBMI >= johnBMI) {
  console.log("Marks BMI higher than John");
  console.log(`Mark BMI ${marksBMI} is higher than John ${johnBMI}`);
} else {
  console.log("John BMI higher than Marks");
  console.log(`John BMI ${johnBMI} is higher than Mark ${marksBMI}`);
}
