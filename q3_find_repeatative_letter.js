//? Write a function called countChar that takes two parameters: a string and a character to count. 
//The function should return the number of times the specified character appears in the string.



// 1.split
// 2.for 
// 3.count=0
// 4.if(target == i){return count}

const countChar=(str,target)=>{
    str=str.toLowerCase()
    target=target.toLowerCase()
    str = str.split("")
    let count = 0
    for(let i of str){
        if(target == i){
            count++
        }
    }
    return count;
}

console.log(countChar("MIIIssIssippi","I"))