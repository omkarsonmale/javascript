// // //function of obejct 
// // const double=(numbers)=>{
// //     let result=[]
// //     for(const num of numbers){ //revise it
// //     result.push(num*2)
// //     }
// //     return result
// //  }
// //  console.log(double([1,2,4,5,87]))

//  //repesenting lettersand their index in object
//  const howmanyletters=(sentense)=>{
//     let result=0;
//     for(const index of sentense){
//         console.log(Number(index)+1)
//         result=Number(index)+1
//     }
//     return{result}
//  }
//  const sentence='hi i am omka sonmale'
//  console.log(howmanyletters(sentence))
/*--------------------------------------------------------------------------*/

//this for integers
 /*const numbers=(nos)=>{
    for(const ind of nos){
        console.log(ind)
    // result=ind*2
  
     }
    // console.log( result)

 }
 numbers([1,2,5,8,7,6,4])*/
 console.log('--------------------------------------------------------')
 //this is for sentence
 const sentence=()=>{
    line ='hi my name is omkar'
    for( word in line){
        console.log(word)
    }
 }
 console.log(sentence())