//javascript
// Find the second Highest element from the array  const arr = [12, 35, 1, 10, 34, 1]

// const arr = [12, 35, 1, 10, 34, 1];
// secondLargest = arr.sort(function(x,y){
//     return y-x ;
// })[1];
// console.log(secondLargest)

//  Program to find out prime numbers in a given array.
// var arr = [12, 35, 1, 10, 34, 1];

// let newArr = arr.map((num)=>{
// if(num % 2 ===0){
//     console.log(num)
// }
// });
// console.log(newArr)


//arr=[1,7,-6,15,7,9,0,2,-3]
// Seq=[7,15,-3]
// Return true if the sequence is present in array in the same order else return false
 
// var arr=[1,7,-6,15,7,9,0,2,-3];
//   var Seq=[7,15,-3]
//   function findCommonElements3(arr1, arr2) {
//     return arr1.some((item)=> {arr2.includes(item)})
// }
// console.log(findCommonElements3(arr, Seq))


// Write a program to find the sum of two arrays

// function sumArray(a, b) {
//     var c = [];
//     for (var i = 0; i < Math.max(a.length, b.length); i++) {
//       c.push((a[i] || 0) + (b[i] || 0));
//     }
//     return c;
// }


//Arrange the number into descending order

// let lowestToHighest = numbers.sort((a, b) => a - b);
// let highestToLowest = numbers.sort((a, b) => b-a);


let arraySort=[ 'web-1304', 'site-1305', 'web-1304', 'site-1304' ]

// Which should return: [ 'site-1304', 'web-1304', 'site-1305', 'web-1305' ]

let newArr= arraySort.reverse() 
console.log(newArr)
