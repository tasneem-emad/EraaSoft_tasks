// 1- Buggy Code (Part 5)

function printArray(number) {
    if (number < 1) {
      return [];
    } else {
      var result = [];
      for (let i = 1; i <= number; i++) {
        result[i - 1] = i;
      }
      return result;
    }
} 
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6)); 
console.log(`--------------`)


// 2- Buggy Code (Part 7)

function swap(num1, num2) {
    return [num2, num1];
}
  
console.log(swap(100, 200));
console.log(swap(44, 33));  
console.log(swap(21, 12)); 
console.log(`--------------`)


// 3- The Farm Problem

function animals(chickens, cows, pigs) {
    var chickenLegs = chickens * 2;
    var cowLegs = cows * 4;
    var pigLegs = pigs * 4;
    
    var totalLegs = chickenLegs + cowLegs + pigLegs;
    
    return totalLegs;
}
  
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
console.log(`--------------`)


// 4- Using the "&&" Operator

function andOperator(a, b) {
    return a && b;
}
  
console.log(andOperator(true, true)); 
console.log(andOperator(true, false)); 
console.log(andOperator(false, true)); 
console.log(andOperator(false, false));
console.log(`--------------`)


// 5- Are the Numbers Equal?

function isSameNum(num1, num2) {
    return num1 === num2
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(10, 2)); 
console.log(`--------------`)


// 6- footballs points 

function footballPoints(wins, draws, losses) {
    var wins = wins * 3;
    var draws = draws * 1;
    var losses = losses * 0;
    
    var totalpoints = wins + draws + losses;
    
    return totalpoints;
	
}

console.log(footballPoints(3,4,2));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1));
console.log(`--------------`)


// 7- Convert Hours and Minutes into Seconds

function convert(hours, minutes) {
    var hours = hours * 3600 ;
    var minutes = minutes * 60 ;

    var result = hours + minutes ;

    return result;

}

console.log(convert(1,3));
console.log(convert(2,0));
console.log(convert(0,0));
console.log(`--------------`)


// 8- Fix the Expression

function isSeven(x) {
    return x=== 7;
}

console.log(isSeven(7));
console.log(isSeven(5)); 
console.log(isSeven(42));
console.log(`--------------`) 


// 9- Equality Check

function checkEquality(a, b) {
    return a===b;  
}

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality("hello", "world"));
console.log(checkEquality(1,  1));
console.log(`--------------`)


// 10- Profitable Gamble

function profitableGamble(prob, prize, pay) {
	return prob*prize > pay
}

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));
console.log(`--------------`)


// 11-Boolean to String Conversion

function boolToString(flag) {
    return `${flag}`;
}

console.log(boolToString(true));
console.log(boolToString(false));
console.log(`--------------`)


// 12- Using Arrow Functions

var returnArgument = arg => arg;

console.log(returnArgument(3));
console.log(returnArgument("3"));
console.log(returnArgument(true));
console.log(returnArgument("Hello"));
console.log(`--------------`)


// 13- Frames Per Second

function frames(minutes, fps) {
    return minutes * 60 * fps ;
}

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));
console.log(`--------------`)


// 14- Miserable Parody of a Calculator

function calculator(str) {
    return eval(str)	
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));
console.log(`--------------`)


// 15- Buggy Code (Part 4)

function greeting(name) {
    return "Hello, " + name + "!";
}

console.log(greeting('tasneem'))
console.log(`--------------`)


console.log(`the end`)


const absoluteValue = Math.abs(-5);
console.log(absoluteValue); // ➞ 5
console.log(`--------------`)


const squareRoot = Math.sqrt(25);
console.log(squareRoot); // ➞ 5
console.log(`--------------`)


const power = Math.pow(2, 3); // 2 raised to the power of 3
console.log(power); // ➞ 8
console.log(`--------------`)


const maximum = Math.max(4, 7, 1, 9, 2);
console.log(maximum); // ➞ 9

const minimum = Math.min(4, 7, 1, 9, 2);
console.log(minimum); // ➞ 1









  
  
  

