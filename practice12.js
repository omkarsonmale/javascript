//let =like a condition
let weather='sunny'
if(weather=='cold'){
    console.log("It's like rainig situation")
}
else{
    console.log("Weather is to hot")
}
//functions in js
function writemyname(){
    console.log('omkar')
    console.log("ajay ")
}
writemyname()
function whatismyname(name){
    
    console.log('my name is'+ ' '+name)
}
whatismyname('ram')

function sum(a,b){

c=a+b
    console.log(c)
  
}
sum(10,10)

function cheack(who){
    if(who== 'meena'){
        console.log('female')
    }
    else{
        console.log('male')
    }
 
    
    
}
const prompt = require("prompt-sync")();
who= prompt('name:')
cheack(who)
//another declaration of function
function add(a,b){
    return a+b
}
num1=add(5,6)
console.log(num1)
// another type imlpicite funciton or type of declaration
const directadd=(a,b)=>a+b
console.log(directadd(11,11))

/*-------------------------------------*/

//array
groceries=['apple','mango','chiku']
groceries.push('couconut')
for(i=0;i<groceries.length;i++){
    
console.log(groceries[i])

}
console.log(groceries[1])
//for adding more elements in array weuse**push()**
groceries.push('couconut')
//slice function is used to pint some setof part form array
//**main point is not including 2 */
console.log(groceries.slice(0,2)) 
//for pintingindex of element in array
console.log(groceries.indexOf('mango'))
//printing length of array 
console.log(groceries.length)


//Another way to pint the array
for(const john of groceries ){
    console.log(john)
}



/*--------------------------------------------*/
 //objects in js
const person={name:'pratik',age:'20'}
console.log(person.name)
console.log(person['name'])//another form of  initialization
//assign object add obj
person.phone='1045827965'
console.log(person.phone)
console.log(person)


//anothe way to describe the object
const introducer=(name,age)=>{
    const person={
        name:name,
        age:age,
        salary:50000
    }
    const intro=`hi i'am ${person.name} and my age is ${person.age}and my salary is ${person.salary}` 
    return intro 
}
console.log(introducer('sam','black'))

/*----------------------------------------------*/
//array examples
Number=[1,2,3,4,5,6]
for(i=0;i<Number.length;i++){
    console.log(Number[i]*2)
}

Number=[1,2,3,4,5,6,11,15]
newnum=[]
for(const num of Number){
    console.log(num)
}

const double=(numbers)=>{
   let result=[]
   for(const num of numbers){
   result.push(num*2)
   }
   return result
}
console.log(double([1,2,4,5,87]))
console.log("hii");
































