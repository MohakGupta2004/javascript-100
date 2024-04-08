// Hash Tag Generator

//? You are required to implement a function generateHash that generates a hash tag from a given iput string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tage prefixed with with #.


//Write a function generateHash
const generateHash = (str)=>{
    if (str>280){
        return false
    }
    if(str.trim()==""){
        return false
    }
    //make it capitalize
    newStr=str.split(' ')
    for(i=0;i<newStr.length; i++){
        newStr[i]=newStr[i][0].toUpperCase()+newStr[i].substr(1)
    }
    //Other method of capitalizing
    // newStr=newStr.map((curlElem)=>curlElem.replace(curlElem[0],curlElem[0].toUpperCase()))
    //Now trim it
    trimmedStr=newStr.join("")
    return `#${trimmedStr}`

}

console.log(generateHash("my name is mohak gupta"))
//o/p: #MyNameIsMohakGupta