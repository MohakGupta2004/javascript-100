//? Write a function called countChar that takes two parameters: a string and a character to count. 
//The function should return the number of times the specified character appears in the string.

//Thapa Technical 

// 1.split
// 2.for 
// 3.count=0
// 4.if(target == i){return count}

const countChar=(str,target)=>{
    str=str.toLowerCase() //India=>india
    target=target.toLowerCase() //I=> i
    str = str.split("")// [i,n,d,i,a]
    let count = 0
    for(let i of str){
        if(target == i){ //right i == i not n == i
            count++ //increase count
        }
    }
    return count;//returnning count
}

console.log(countChar("India","I"))