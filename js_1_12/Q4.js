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
  let b = parseInt(input[1])
  let result = 0
  function getDecimalPart(num) 
  {
      return num % 1;
  }
  if(b<=0 || b>=1000 || a<0 || a>=1000)
  {
    console.log("Wrong input");
  }
  else
  {
    result = a/b;
    console.log(getDecimalPart(result));
  }
});
