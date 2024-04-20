//Challenge: Calculate the average

// Write a function called calculateAverage that takes an array of 
// numbers as input and returns the average of thos numbers.

const calculateAverage = (arr)=>{
    sum=0
    
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    prod=sum/arr.length
    return prod
}
console.log(calculateAverage([1,2,3]))