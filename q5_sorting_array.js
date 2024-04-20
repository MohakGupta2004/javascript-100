// ? Write a function to sort an array of numbers in an ascending order.

const sortAscending = (array)=>{
    
    done = false
    while(!done){
        done = true
        for(i=0;i<array.length;i++){
            if(array[i]>array[i+1]){
                done = false
                let tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp
            }
        
    }
}
    return array
}


console.log(sortAscending([5,3,1,8]))
//1st iteration 
//3,5,1,8
//2nd iteration
//3,1,5,8
//3rd iteration
//1,3,5,8
