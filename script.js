

function fizzBuzz() {

    let num1 = 49;
    let num2 = 55;
    let num3 = 120;
    let num4 = 9999;


    if(num1 % 3 === 0) {
        console.log("Fizz");
    } else if(num1 % 5 === 0 ) {
        console.log("Buzz");
    } else if ((num1 % 3) && (num1 % 5) === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Pop");
    }
    
    
    if(num2 % 3 === 0) {
        console.log("Fizz");
    } else if(num2 % 5 === 0 ) {
        console.log("Buzz");
    } else if ((num2 % 3) && (num2 % 5) === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Pop");
    }
    
    
    if(num3 % 3 === 0) {
        console.log("Fizz");
    } else if(num3 % 5 === 0 ) {
        console.log("Buzz");
    } else if ((num3 % 3) && (num3 % 5) === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Pop");
    }
    
    
    if(num4 % 3 === 0) {
        console.log("Fizz");
    } else if(num4 % 5 === 0 ) {
        console.log("Buzz");
    } else if ((num4 % 3) && (num4 % 5) === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Pop");
    }

}

fizzBuzz();




const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

let average = 0;

function averager() {
    for (let i = 0; i < prices.length; i++) {
        average += prices[i] / prices.length;
        console.log(average);

    }
}

averager();







const a = Math.round(37.5);
const b = Math.round(-40);
const c = Math.round(0);
const d = Math.round(100);
const e = Math.round(173.13);
const f = Math.round(-13);

function fahtoKel() {
    let kelvin1 = (a - 32) * 5 / 9 + 273.15;
    let decimal = kelvin1.toFixed(2);
    console.log(kelvin1, decimal);
    
    let kelvin2 = (b - 32) * 5 / 9 + 273.15;
    let decimal2 = kelvin2.toFixed(2);
    console.log(kelvin2, decimal2);
    
    let kelvin3 = (c - 32) * 5 / 9 + 273.15;
    let decimal3 = kelvin3.toFixed(2);
    console.log(kelvin3, decimal3);
    
    let kelvin4 = (d - 32) * 5 / 9 + 273.15;
    let decimal4 = kelvin4.toFixed(2);
    console.log(kelvin4, decimal4);
    
    let kelvin5 = (e - 32) * 5 / 9 + 273.15;
    let decimal5 = kelvin5.toFixed(2);
    console.log(kelvin5, decimal5);
    
    let kelvin6 = (f - 32) * 5 / 9 + 273.15;
    let decimal6 = kelvin6.toFixed(2);
    console.log(kelvin6, decimal6);
}




fahtoKel();




function pow(two, three ) {

    var i, pow = 1;
    for (let i = 0; i < three; i++) {
        pow = pow * two;
    }
    return pow;
}

console.log(pow(2, 3));