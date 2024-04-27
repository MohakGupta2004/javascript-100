//12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.


// const removeDuplicates = (num)=>{
//     for(i=0;i<num.length;i++){
//         for(j=i+1;j<num.length;j++){
//             if(num[i]===num[j]){
//                 num.splice(j,1)
//             }
//         }
//     }
//     return num
// }

const removeDuplicates = (num)=>{
    let newSet=[...new Set(num)]
    return newSet
}



console.log(removeDuplicates([1,2,3,1,2,3,4]))
console.log(removeDuplicates([5,6,7,2,3,4,5,6,7,2,3,4,89]))