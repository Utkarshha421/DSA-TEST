// Question 1:
// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.

// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Ans = 0 2 4 6 8 10

// Question 2:
// Write a JavaScript while loop that calculates the factorial of a given number.

// let num=10,factorial=1,i=1;
// while(i<=num){
//     factorial=factorial*i;
//     i++;
// }
// console.log(factorial);


//Ans = 3628800

// Question 3:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.

// let array=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// function Addition(array){
//     for(let i=0;i<array.length;i++){
//         sum=sum+array[i];
//     }
//     return sum;
// }
// console.log(Addition(array));

// Ans = 55

// Question 4:
// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.

// let a=0,b=1,n=10,c;
// console.log(a);
// console.log(b);
// c=a+b;
// console.log(c);
// while(n>0){
//     a=b;
//     b=c;
//     c=a+b;
//     n--;
//     console.log(c);
// }

// Ans = 0 1 1 2 3 5 8 13 21 34 55 89 144

// Question 5:
// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

let array1=["Preeti","Astha","Mohini","Priyanka","Madhavi"];
let array2=[];
function NewString(array1){
    for(let i=0;i<array1.length;i++){
        if(array1[i].length>5){
            array2=array1[i];
        }
        return array2;

    }
}
console.log(NewString(array1));

// Question 6:
// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.

// let num=10;
// function prime(num){
//     for(let i=2;i<10;i++){
//         if(num%i===0){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }
// console.log(prime(num));

// Ans = false

// Question 7:
// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.

// for(let i=1;i<=1000;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }

// Ans = 15 30 45 60 75 90 105 120 135 150 165 180 195 210 225 240 255 270 285 300 315 330 345 360 375 390 405 420
//435 450 465 480 495 510 525 540 555 570 585 600 615 630 645 660 675 690 705 720 735 750 765 780 795 810 825 840 855 870 885 900 915 930 945 960 975 990

// Question 8:
// Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

let string="utkarshha";
function reverse(string){
for(let i=string.length-1;i>=0;i--){
    var newstring=string[i];
}
return newstring;
}
console.log(reverse(string));

// Question 9:
// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.

