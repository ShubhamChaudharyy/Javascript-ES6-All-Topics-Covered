//template literals
//Old JavaScript
let word1="Dylan"
let word2="Isrely"

//const fullname=word1+' '+word2;
//console.log(fullname)
//ES6
//using `${any dynamic variable}` you dont have to use \n for next line: just keep it in next line that will do the job
const fullname=`${word1} 
${word2}`
document.getElementById('demo').innerText=fullname