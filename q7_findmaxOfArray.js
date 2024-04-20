// Write a funtion findMax that takes an array of numbers as input and returns the maximum
// number in the Array.

const findMax = (arr)=>{
    newArray=arr.sort((a,b)=> a-b)
    return newArray[newArray.length-1]
}

// const findMax = (arr)=>{
//     return Math.max(...arr)
// }


console.log(findMax([1,5,3,9,2]))