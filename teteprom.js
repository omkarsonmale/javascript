const prompt = require("prompt-sync")();
 const ncount=prompt('Enter no of elements ')
  nobank=[]
 for( i=0;i<ncount;i++){
      nobank.push(i)
 }
 for(i=0;i<ncount;i++){
 console.log(nobank[i])
 }
