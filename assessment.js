// Write a function that takes in a string and returns it when reversed
// let food = “eating”

 let food ="eating"
 let newFood=food.split(",")
 console.log(newFood);
console.log(newFood.reverse())
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function divideArray(num){
    if(num.length<=1){
        return num;
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    return sortedArray(divideArray(left),divideArray(right))
}
function sortedArray(left,right){
    let emptyArray=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return [...emptyArray,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(divideArray(num));

function binary(num1,target){
    let left=0;
    let right=num1.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num1[middle]===target){
            return middle;
        }
        else if(num1[middle]<target){
            left=middle+1
        }
        else{
            right=middle-1
        }
    }
    return null
}
let num1 = [0,2,5,8,23,45,76]
 target = 23
 console.log(binary(num1,target));

// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// let year=2000;
switch(year){
    case 2000:
        console.log("2000 is a leap year");
        break;
    case 2001:
        console.log("2001 is not a leap year");
        break;
    case 2002:
        console.log("2002 is not a leap year");
        break;
    case 2003:
        console.log("2003 is not a leap year");
        break;
    case 2004:
        console.log("2004 is  a leap year");
        break;
    case 2005:
        console.log("2005 is not a leap year");
        break;
    case 2006:
        console.log("2006 is not a leap year");
        break;
    case 2007:
        console.log("2007 is not a leap year");
        break;
    case 2008:
        console.log("2008 is  a leap year");
        break;
    case 2009:
        console.log("2009 is not a leap year");
        break;
}

// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
 let numArray = [12,87,45,75,23,64,73]
 function double(value){
    return value * 4
 }
 let doubleNumArray=numArray.map(double);
 console.log(doubleNumArray);


// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
let nums=["10","24","45","56","67"]
console.log(nums.join(","));