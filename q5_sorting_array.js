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
            // result.push(tmp)
        }
        
    }
}
    return array
}


console.log(sortAscending([5,3,1,8]))
