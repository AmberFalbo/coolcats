'use strict';

alert('Welcome to Cat Personalities!');
var doYouLoveCats = 'yuppers'
var userName = prompt('What is your name?');

function askingNameAndAge() {
    var userAge = prompt('What is your age?');
    
    document.write('<h3>' + userName + '</h3>');
}

while( (doYouLoveCats != 'YES') && (doYouLoveCats != 'NO') ){
    doYouLoveCats = prompt('Do you love cats?').toUpperCase();
}

if(doYouLoveCats === 'NO'){
    var areYouADog = prompt('Are you sure?').toUpperCase();
}
function howMuchYouLoveCats(){
    console.log('doYouLoveCats' + doYouLoveCats)
    if (doYouLoveCats === 'YES'){
        alert('Meow Meow Welcome Friend of cats Purrington ' + userName);
    }
    else if(areYouADog === 'NO'){
        alert('Get ready for cuddles and purrs!!');
    }
    else if (areYouADog === 'YES'){
        alert('The sassy cats might be coming for you!');
      
    //  } else {
    //      alert('CATS ARE THE BEST CREATURES!')
     }
}
    

function forceGuessingGame() {
 
    var correctAnswer = 30;

    for(var i = 0; i < 3; i = i + 1){
        var numberGuess = prompt('Whats the oldest a cat has lived?');
        if(numberGuess == correctAnswer){
            alert('You are great at guessing numbers AND love cats!');
            break;
        } 
        else if (i == 2) {
            alert('It is ok, Cats will still love you!');
        }
        else {
            alert('Sorry, please try again!');
        }
    }
}



howMuchYouLoveCats();
forceGuessingGame();
askingNameAndAge();
