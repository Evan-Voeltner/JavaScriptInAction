let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);

let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your color animal?');
console.log(`I've never seen a ${colorInput} ${animalInput}`);

//Breakfast: Eggs and bacon
// Lunch: Turkey sandwich
// Dinner: Pasta

let timeOfDay = 1300;
let currentMeal;

if(timeOfDay < 1200){
    currentMeal = 'Eggs & Bacon';
}
else if(timeOfDay > 1200 && timeOfDay < 1700){
    currentMeal = 'Turkey Sandwich';
}
else if(timeOfDay < 1700){
    currentMeal = 'Pasta';
}

let randomNum = Math.random() * 10;

if(randomNum < 2){
    console.log('Beatles');
}
else if(randomNum > 3 && randomNum < 5){
    console.log('Stones');
}
else if(randomNum > 6 && randomNum < 8){
    console.log('Floyd');
}
else if(randomNum === 2 || randomNum === 10){
    console.log('Hendrix');
}


for(let i = 0; i <= 7; i++){
    console.log('JavaScript is cool!');
}

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log('hello');
    }
    else{
        console.log('goodbye');
    }
    
}

function printMovieName(){
    let favoriteMovie = 'The Dark Knight';
    console.log(favoriteMovie);
}

printMovieName();

function findband(){
    userInput = prompt('What is your favorite band?');
    return userInput;
}

let favoriteBand = findband();
console.log(favoriteBand);

function concertDisplay(musicalAct){
    userStreet = prompt('What street do you live on?');
    console.log(`It would be great if ${musicalAct} played a show on ${userStreet}!`);
}

concertDisplay(favoriteBand);

let desktopItems = ['Desk', 'Lamp','Computer'];

console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet');

for(let item of desktopItems){
    console.log(item);
}

//__________________________________________________________________________________________________

let magicNumber = Math.floor(Math.random() * 100);
let guess = 0;

while(guess !== magicNumber){
    userInput = prompt('What is your number guess?');
    var parsedNum = parseInt(userInput);
    guess = parsedNum;
    
    if(parsedNum === magicNumber){
        alert(`Congratulations! The magic number is ${parsedNum}`);
    break;
    }
    else if(parsedNum < magicNumber){
        alert('Too low!');
        if(parsedNum - 10 > magicNumber - 20){
            alert('Getting warmer!');
        }
    }
   else if(parsedNum > magicNumber){
        alert('Too high!');
        if(parsedNum + 10 < magicNumber + 20){
            alert('Getting warmer!');
        }
   }

}