const playButton = document.querySelector(".play-music");
const muteButton = document.querySelector(".mute-music");
const audio = new Audio("/audio/backgroundmusic.mp3");

// audio play en mute //
playButton.addEventListener("click", function(){
    audio.play(); 
    audio.muted = false;
});
muteButton.addEventListener("click", function(){
    audio.muted = true;
});

// Html elementen binenenhalen
const btnThrow = document.querySelector(".throw");
const btnHigher = document.querySelector(".higher");
const btnLower = document.querySelector(".lower");
const btnStart = document.querySelector(".start");
const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const announcementBlock = document.querySelector(".announcement")

const firstDice = document.querySelector('.first-dice');
const secondDice = document.querySelector('.second-dice');
const thirdDice = document.querySelector('.third-dice');
const fourthDice = document.querySelector('.fourth-dice');

// Variabelen
let higher;
let diceUser1;
let diceUser2;
let diceComp1;
let diceComp2;

// buttons disabled maken
btnThrow.disabled = true;
btnHigher.disabled = true;
btnLower.disabled = true;

// initialisatie variablen
let yourPoints = 10;
let computerPoints = 10;
yourScore.textContent = yourPoints;
computerScore.textContent = computerPoints;

// random getallen genereren
function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

btnStart.addEventListener('click', function () {
  //eerste dubbelsteen van computer
  diceComp1 = getRandomInt(6);
  console.log(diceComp1);
  thirdDice.src = "./img/dice-" + diceComp1 + ".png";

  //tweede dubbelsteen van computer
  diceComp2 = getRandomInt(6);
  console.log(diceComp2);
  fourthDice.src = "./img/dice-" + diceComp2 + ".png";

  btnStart.disabled = true;
  btnHigher.disabled = false;
  btnLower.disabled = false;

})

// AddEventListeners
btnHigher.addEventListener('click', function () {
  btnHigher.disabled = true;
  btnLower.disabled = true;
  btnThrow.disabled = false;

  higher = true;
})

btnLower.addEventListener('click', function () {
  btnLower.disabled = true;
  btnHigher.disabled = true;
  btnThrow.disabled = false;

  higher = false;
})

btnThrow.addEventListener('click', function () {
  //eerste dubbelsteen van user//
  diceUser1 = getRandomInt(6);
  console.log(diceUser1)
  firstDice.src = "./img/dice-" + diceUser1 + ".png";

  //tweede dubbelsteen van user
  diceUser2 = getRandomInt(6);
  console.log(diceUser2)
  secondDice.src = "./img/dice-" + diceUser2 + ".png";


  const diceUserTotal = diceUser1 + diceUser2;
  const diceCompTotal = diceComp1 + diceComp2;
  // We gaan kijken of gebruiker hoger of lager heeft geklikt
  
  if (higher) {
    // checken voor hoger
    if(diceUserTotal > diceCompTotal) {
      // user heeft gewonnen --> user krijgt + punt en computer - punt
      yourPoints++;
      computerPoints--;

      announcementBlock.textContent = "Je hebt gewonnen!";
      yourScore.textContent = yourPoints;
      computerScore.textContent = computerPoints;
    } else if(diceUserTotal < diceCompTotal) {
      // computer heeft gewonnen --> user krijgt - punt en computer + punt
      yourPoints--;
      computerPoints++;
      
      announcementBlock.textContent = "Je hebt verloren!"
      yourScore.textContent = yourPoints;
      computerScore.textContent = computerPoints;
    } else {
      // gelijkspel
      announcementBlock.textContent = "Gooi het nog een keer!"
    }
  } else {
    // checken voor lager
    if(diceUserTotal < diceCompTotal) {
      // user heeft gewonnen --> user krijgt + punt en computer - punt
      yourPoints++;
      computerPoints--;
      
      announcementBlock.textContent = "Je hebt gewonnen!";
      yourScore.textContent = yourPoints;
      computerScore.textContent = computerPoints;
    } else if(diceUserTotal > diceCompTotal) {
      // computer heeft gewonnen --> user krijgt - punt en computer + punt
      yourPoints--;
      computerPoints++;

      announcementBlock.textContent = "Je hebt verloren!"
      yourScore.textContent = yourPoints;
      computerScore.textContent = computerPoints;
    } else {
      // gelijkspel
      announcementBlock.textContent = "Gooi het nog een keer!"
    }
  }
  
  // Opnieuw spelen 
  btnThrow.disabled = true;
    btnStart.disabled = false;
});




















