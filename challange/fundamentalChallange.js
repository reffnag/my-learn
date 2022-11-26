//PART1
//code challange #1
const massMark = 78; //test data1 = 78 , data2 = 95;
const heightMark = 1.69; //test data1 = 1.69, data2 = 1.88;
const massJohn = 92; //test data1 = 92, data2 = 85;
const heightJohn = 1.95; //tets data1 = 1.95, data2 = 1.76;

const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI); //data1 = true , data2 = false

//code challange #2
bmiMark > bmiJohn
  ? console.log(
      `Mark's BMI higher than John's!, Mark's BMI ${Math.floor(
        bmiMark
      )} is higher than John's ${Math.floor(bmiJohn)}`
    )
  : console.log(
      `John's BMI is higher than Mark's!, John BMI ${Math.floor(
        bmiJohn
      )} is higher than Mark's ${Math.floor(bmiMark)}`
    );

//code challange #3
const dolphinAverageScore = (96 + 108 + 89) / 3;
const dolphinBonus1Average = (97 + 112 + 101) / 3; //data bonus1
const dolphinBonus2Average = (109 + 95 + 106) / 3; //data bonus2

console.log(dolphinAverageScore);
console.log(dolphinBonus1Average);
console.log(dolphinBonus2Average);

const koalaAverageScore = (88 + 100 + 110) / 3;
const kolaBonus1Average = (109 + 95 + 123) / 3; //data bonus1
const koalaBonus2Average = (109 + 95 + 106) / 3; //data bonus2

console.log(koalaAverageScore);
console.log(kolaBonus1Average);
console.log(koalaBonus2Average);

//data1
if (dolphinAverageScore > koalaAverageScore) {
  console.log("Dolphin's Team win");
} else if (dolphinAverageScore === koalaAverageScore) {
  console.log("draw");
} else {
  console.log("Koala's Team win");
}

//bonus data1
if (dolphinBonus1Average > kolaBonus1Average && dolphinBonus1Average >= 100) {
  console.log("Dolphin's Team win");
} else if (
  kolaBonus1Average > dolphinBonus1Average &&
  kolaBonus1Average >= 100
) {
  console.log("Koala's Team win");
} else {
  console.log("no one Team win a trophy");
}

//bonus data2
if (dolphinBonus2Average > koalaBonus2Average && dolphinBonus2Average >= 100) {
  console.log("Dolphin's Team Win");
} else if (
  dolphinBonus2Average === koalaBonus2Average &&
  dolphinBonus2Average >= 100 &&
  dolphinBonus2Average >= 100
) {
  console.log("Draw");
} else if (
  koalaBonus2Average > dolphinBonus2Average &&
  koalaBonus2Average >= 100
) {
  console.log("Koala's Team Win");
} else {
  console.log("No, one team win");
}

//coding challange #4
let billValue1 = 275;
let tip1 = 15 / 100;
let tip2 = 20 / 100;

billValue1 >= 50 && billValue1 <= 300
  ? console.log(billValue1 + tip1)
  : console.log(billValue1 + tip2);

let billValue2 = 40;
billValue2 >= 50 && billValue2 <= 300
  ? console.log(billValue2 + tip1)
  : console.log(billValue2 + tip2);

let billValue3 = 430;
billValue3 >= 50 && billValue3 <= 300
  ? console.log(billValue3 + tip1)
  : console.log(billValue3 + tip2);

//part2
//code challange #1
