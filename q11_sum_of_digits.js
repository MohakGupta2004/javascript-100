//11. Write a function that takes a number as input and returns the sum of it's digits


const sumOfDigits = (num)=>{
    const numArray = num.toString().split("")
    let sum=0;
    for(let i=0;i<numArray.length;i++){
        sum+=parseInt(numArray[i])
    }
    return sum
}

// const sumOfDigits = (num)=>{
//     let arr = Array.from(String(num),Number)
//     return arr.reduce((accum, curElem)=> accum+=curElem,0)
// }



console.log(sumOfDigits(1234))