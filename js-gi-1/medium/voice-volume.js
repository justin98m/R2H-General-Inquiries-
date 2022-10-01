//compare uppercasesd response to original response
let is_Screaming = (response) => response.toUpperCase() === response;
//compare lowercased responsed to original response
let is_Whisphering = (response) => response.toLowerCase() === response;

function main(){
  alert("Type Q to quit");
  let input = prompt("What do you want to say: ");
  if(input.toUpperCase() === 'Q')return false;

  if(is_Screaming(input)){
    console.log(`STOP SCREAMING AT ME!!!!!`);
  } else if (is_Whisphering(input)){
    console.log(`You're whispering, I need you to speak up`);
  } else {
    console.log(`Oh I understand, thanks for talking at a normal volume `+
       `this time`);
  }
  return true;
}

let runPrompt =  true;
while(runPrompt){
  runPrompt = main();
}
