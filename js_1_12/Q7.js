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
  let result = 0
  if(a<=0 || a>=1000000)
  {
    console.log("Wrong input");
  }
  else
  {
    const temp = String(a).slice(-1);
    const lastDigit = Number(temp);
    console.log(lastDigit);
  }
});
