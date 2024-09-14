//1) Write a function named calculateDifference
function calculateDifference(a, b) {
    return a - b;
  }
  console.log(calculateDifference(10,5))


  //2) Write a function named isOdd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  console.log(isOdd(4));
  
  
  //3) Write a function named findMin 
  function findMin(arr) {
    return Math.min(...arr);
  }
  console.log(findMin([3, 1, 4, 1, 5, 9]));
 
 //4) Write a function named filterEvenNumbers
 function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
  }
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

  //5) Write a function named sortArrayDescending
  function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); // Output: [9, 5, 4, 3, 1, 1]

  //6) Write a function named lowercaseFirstLetter 
  function lowercaseFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  console.log(lowercaseFirstLetter("JavaScript"));  

  //7) Write a function named countVowels
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
  }
  console.log(countVowels("JavaScript"));  

  //8) Write a function named findAverage
  function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  console.log(findAverage([1, 2, 3, 4, 5]));  
   
