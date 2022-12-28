const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titlecase(line){
  return line.charAt(0).toUpperCase()+ line.slice(1)
}


const titleCased = () => { 
  let result = []
  for(let i = 0; i <10; i++){
    let capped = tutorials[i].split(" ").map(titlecase).join(" ")
    result.push(capped)
  }
  return result
};