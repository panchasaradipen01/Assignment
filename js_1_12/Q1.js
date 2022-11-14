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
  if(b<1 || b>=1000 || a<1 || a>=1000)
  {
    console.log("Wrong input");
  }
  else
  {
    let result = []
    result[0] = a+b;
    result[1] = a-b;
    result[2] = a*b;
    result[3] = a/b;
    result[4] = a%b;
    for(i=0;i<result.length;i++)
    {
      console.log(result[i]);
    }
  }
});
