// //higher order function
// //map
// //filter
// //reduce
// //--------------map----------------
// //map-retuns loops and array
// [1,2,3,4].map(number=>console.log(number))
// //Map access all elements in array for and calculation
// [1,2,3,4].map(number=>console.log(number*2))
// let nos=[1,2,3,4].map(number => number*2)
// console.log(nos)

// const doublemap=(numbers)=>{
//    return  numbers.map(number =>number*2)

// }
// console.log( doublemap([1,2,5,4]))
// function  add(a,b){
//     let c=a+b
//    return c

// }
//  console.log(add(6,4))

//  ////======================filter()======================/////////
// //In filter array we filter out some no which fixes to our condition
// const filter=(numbers,greaterthan) => {

//   let result=[]
//   for(const number of numbers){
//   if(number>greaterthan){
//    result.push(number)

//   }
// }

//   return result
  

// }
// console.log(filter([1,45,47,58],10))

// //another type of for loop in javascript
// //*******for(const number of numbers)***********
// const newfilter=(numbers,lessthan) => {

//    let result=[]
//    for(const number of numbers){
//    if(number<lessthan){
//     result.push(number)
 
//    }
//  }
 
//    return result
   
 
//  }


//  const prompt = require("prompt-sync")();
//  ncount=prompt('Enter no of elements ')
//   nobank=[]
//  for( i=0;i<ncount;i++){
//       nobank.push(i)
//  }
//  for(i=0;i<ncount;i++){
//  console.log(nobank[i])
//  }
//  for( i=0;i<newfilter;i++){
//   console.log("good night");
//  }
 //Filter example
const oldfilter=(numbers,greater)=>{
  let result=[]
  for(const number of numbers){
    if(number>greater){
      result.push(number)
    }
  }
 return result
}
console.log(oldfilter([1,4,5,8,7],3))
//map example 
[1,2,5,4].map(number =>{
  console.log(number)
  console.log('haha')
})