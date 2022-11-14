const readline = require("readline");
const code = readline.createInterface({
  input: process.stdin
});

const userInput=[];

code.on("line",(data)=>{
  userInput.push(data);
});

code.on("close",() => {
  let input=userInput
  let a = parseInt(input[0])
  let first,last,Rev
  if(a<=9 || a>=100)
  {
    console.log("Wrong input");
  }
  else
  {
    last=a%10
    first=parseInt(a/10)
    rev= last*10 + first
    console.log(rev)
  }
});