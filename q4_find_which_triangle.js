//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return 
// a string indicating the type of triangle: "equilateral", "isosceles", or "scelene"

const checkTriangleType = (a,b,c)=>{
    if(a==b && b==c){
        return "equilateral"
    }
    else if(a==b || a==c || b==c){
        return "isosceles"
    }
    else{
        return "scalene"
    }
}

console.log(checkTriangleType(3,3,3))
console.log(checkTriangleType(3,4,3))
console.log(checkTriangleType(3,5,7))
