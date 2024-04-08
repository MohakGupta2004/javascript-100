//Q1. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by space.


const findLongestWords = (str)=>{
    newStr=str.split(" ") //split the string between spaces
    newStr.sort((a,b)=>a.length-b.length) // You can reverse it too like (b.length-a.length)
    return (newStr[newStr.length-1]) //return the last element.
}



console.log(findLongestWords("The longest word here is googooogle.com"))