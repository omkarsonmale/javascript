let title  = document.getElementById('title')
console.log( title.innerText)
// Now i am changing the html text using js

title.innerText="Changed the text"
console.log('After changing text:',title.innerText)
let message='hi i changed by declaring the message '
title.innerText=message;
console.log(title.innerHTML)
//Now i'am declaring this in div
let ntitle=document.getElementById('ntitle')
console.log(ntitle.innerHTML)
ntitle.innerHTML='Changed the div message'
console.log(ntitle.innerHTML)
//We are also uses css in js
ntitle.style.backgroundColor='grey'
ntitle.style.color='red'



let redDiv=document.getElementById('red')
redDiv.onclick= function(){
    console.log('red')
}
let yellowDiv=document.getElementById('yellow')
yellowDiv.onclick= function(){
    console.log('yellow')
}
let blackDiv=document.getElementById('black')
blackDiv.onclick= function(){
    console.log('black')
}
let grey=document.getElementById('grey')
grey.onclick= function(){
   
    console.log('grey')
    
}
redDiv.style.border= '2px solid grey';
yellowDiv.style.border= '2px solid grey';
blackDiv.style.border= '2px solid White';

//Now we use for loop
const square=document.querySelectorAll('.colorSquare')
square.forEach(square=>{
    square.onclick= () =>console.log(square.value)
})
//Skip Part Printing number onclick 4.18hrs