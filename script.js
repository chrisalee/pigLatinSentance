// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigSentance('Pig latin is cool'); // igPay atinlay siay oolcay
// pigSentance('Hello world !');     // elloHay orldway !

function pigSentance(str){
  let newStr="";
  const array=str.split(" ");
  for (let i of array){
      let firstLetter=""; //use to store the first letter in the word
      for(let j in i){
          if(j==='0'){
              firstLetter+=i[j]; //store first letter
          }
          else{
              newStr+=i[j];
          }
      }
      newStr+=firstLetter; //put it into end of the word
      newStr+=" "; //space
  }
  newArray=newStr.split(" ");
  newArray.pop();//delete the empty space
  let result="" //store the result
  for(let index of newArray){
      if (index.length!=1){
          result+=index;
          result+="ay";
          result+=" ";        
      }
      else if (index.length==1){
              if(index=="?" ||index=="!" ||index=="."){ //use to check if the last length is not equal symbol
              result+=index;
              }
              else{
                  result+=index;
                  result+="ay";
                  result+=" ";               
          }
          
      }
  }
  
  if(result[result.length-1] ===" "){ //delete last space
      result=result.slice(0,result.length-1);
  }
  console.log(result);
  return(result);
}

pigSentance('Pig latin is cool');
pigSentance('Hello world !');

// ************************************************************
//  another way doing it

function letters(word) {
  // console.log(word.split(''));
  return word.split('');
};
  
function pigLatinizeWord(word) {
  var chars = letters(word);
  // console.log(chars.slice(1).join('') + chars[0] + 'ay');
  return chars.slice(1).join('') + chars[0] + 'ay';
};
  
function pigLatinizeSentence(sentence) {
  console.log(sentence.replace(/\w+/g, pigLatinizeWord));
  return sentence.replace(/\w+/g, pigLatinizeWord)
};
  
pigLatinizeSentence('try this one');