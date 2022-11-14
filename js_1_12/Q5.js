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
  let A = parseInt(input[0])
  let B = parseInt(input[1])
  let C = parseInt(input[2])
  let D = parseInt(input[3])
  let E = parseInt(input[4])
  let avg = 0
  if(A>=100 || B>=100 || C>=100 || D>=100 || E>=100)
  {
    console.log("Wrong input");
  }
  else
  {
    avg = (A+B+C+D+E)/5;
    console.log(avg);
  }
});
