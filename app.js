//1. Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Answer 

let reverse=(str)=>{
    let newString=[]
    for(let i =str.length-1;i>=0;i--){
        newString.push(str[i]) 
    }
    return newString.join('')
}
console.log(reverse('hello world'))


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


let sumOfPositive=(arrayOfNums)=>{
let num=0;
for(let i =0; i< arrayOfNums.length;i++){
   if(arrayOfNums[i]>0){
    num+=arrayOfNums[i]

   }
   
}
return num
}

// 3  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


let calculator=(num1,operator,num2)=>{
    if(operator==='+'){
        return num1+num2
    }
    else if(operator==='-'){
        return num1-num2
    }
    else if(operator==='*'){
        return num1*num2

    }
    else if(operator==='/'){
        return num1/num2

    }
}

console.log(calculator(2,'+',2))


// 4 Roman to integer

function romanToInt(roman) {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
  
    let result = 0;
    
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral > currentNumeral) {
        result -= currentNumeral;
  
      } else {
        result += currentNumeral;
        
      }
    }
  
    return result;
  }

  console.log(romanToInt("IX"))





//5 Write a JavaScript program to find the most frequent element in an array and return it.


  function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;
  
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
     
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
  }
  

  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  

  const mostFrequent = findMostFrequentElement(inputArray);
  console.log(mostFrequent); 




//6 JavaScript program that generates a random password of a specified length, including a mix of uppercase letters, lowercase letters, numbers, and special characters

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_+=";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

    const allCharsLength = allChars.length;
 
    let password = "";
  
    for (let i = 0; i < length; i++) {

      const randomIndex = Math.floor(Math.random() * allCharsLength);
      
      password += allChars[randomIndex];
    }
  
    return password;
  }
  


  console.log(generateRandomPassword(12));
  
  
//7   JavaScript function to find the second smallest element in an array of numbers.


function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("Second smallest element not found.");
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [5, 2, 8, 3, 1, 9];
  const secondSmallest = findSecondSmallest(numbers);
  console.log(secondSmallest); 
