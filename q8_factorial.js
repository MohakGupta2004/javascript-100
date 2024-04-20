//Write a factorial function


const factorial = (n)=>{
    if(n===0){
        return 1
    }
    let fact=1;
    for(let i = 0;i<n;i++){
        fact=fact*(n-i)
    }
    return fact
}

console.log(factorial(5))