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
  let n = parseInt(input[0])
  let result = 0
  function firstDigit(n)
    {
        while (n >= 10)
            n /= 10;
        return Math.floor(n);
    }
    function lastDigit(n)
    {
        return Math.floor(n % 10);
    }
  if(n<=9 || n>=100)
  {
    console.log("Wrong input");
  }
  else
  {
    console.log(firstDigit(n));
    console.log(lastDigit(n));
  }
});


OR


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
  let n = parseInt(input[0])
  let result = 0
  function firstDigit(n)
  {
    let digits = Math.floor(Math.log(n)/Math.log(10))
    n = Math.floor(n / Math.pow(10, digits))
    return n;
  }
  function lastDigit(n)
  {
    return (n % 10)
  }
  if(n<=9 || n>=100)
  {
    console.log("Wrong input");
  }
  else
  {
    console.log(firstDigit(n));
    console.log(lastDigit(n));
  }
});
