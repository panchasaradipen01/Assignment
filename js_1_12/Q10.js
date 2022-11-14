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
  let last, rd, second, first, rn
  if(a<=99 || a>=1000)
  {
    console.log("Wrong input");
  }
  else
  {
    last = a%10
    rd = parseInt(a/10)
    second = rd%10
    first = parseInt(rd/10) 
    rn = last*100 + second*10 + first
    console.log(rn)
  }
});
