//Write a function arraysAreEqual that takes two arrays arr1 and arr2
// as input and returns true if the arrays are equal(i.e., contain the
// same elements in the same order).

const arraysAreEqual = (arr1,arr2)=>{
    len = 0;
    for(let i=0;i< arr1.length || i<arr2.length;i++){
        if(arr1[i] === arr2[i]){
            len++
        }
    }
    if(len==arr1.length){
        return true
    }
    return false
}
console.log(arraysAreEqual([1,4,3],[1,2,3]))