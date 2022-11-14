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
  let cp = parseInt(input[0])
  let sp = parseInt(input[1])
  let profit = 0
  if(cp<=0 || cp>=1000 || sp<=0 || sp>=1000)
  {
    console.log("Wrong input");
  }
  else
  {
    profit = sp-cp;
    console.log(profit);
  }
});
