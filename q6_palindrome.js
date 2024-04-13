// ? Write a function to determine whether a given string is a palindrome or not.
// A palindrome is a word, phrase, number or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

const isPalindrome = (str)=>{
    let regex = /\W/gi;
    str=str.toLowerCase().replace(regex, "")
    // console.log(str)
    let reverseStr = str.split("").reverse().join("")
    // console.log(reverseStr)
    return str === reverseStr ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"))