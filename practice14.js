//higher order function
//map
//filter
//reduce
//--------------map----------------
//map-retuns loops and array
//[1,2,3,4].map(number=>console.log(number))
[1,2,3,4].map(number=>console.log(number*2))
let nos=[1,2,3,4].map(number => number*2)
console.log(nos)

const doublemap=(numbers)=>{
   return  numbers.map(number =>number*2)

}
console.log( doublemap([1,2,5,4]))