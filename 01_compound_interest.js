// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;
const r = 7;
const t = 4;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE 

let principleAmount = p;

for(let yearCounter = 1; yearCounter <= t; yearCounter++) {
    const yearlyInterestAmount = principleAmount * (r / 100);
    principleAmount = principleAmount + yearlyInterestAmount;
}

const interestValue = principleAmount - p;
console.log(interestValue);