const btnThrow = document.querySelector(".throw");
const firstDice = document.querySelector('.first-dice');
const secondDice = document.querySelector('.second-dice');
const thirdDice = document.querySelector('.third-dice');
const fourthDice = document.querySelector('.fourth-dice');
btnThrow.addEventListener('click', function(){
  //eerste dubbelsteen//
function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber1 = getRandomInt(6);
  console.log(myNumber1)
  firstDice.src = "./img/dice-" + myNumber1 + ".png";


//tweede dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber2 = getRandomInt(6);
  console.log(myNumber2) 
  secondDice.src = "./img/dice-" + myNumber2 + ".png"; 

//deerde dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber3 = getRandomInt(6);
  console.log(myNumber3) 
  thirdDice.src = "./img/dice-" + myNumber3 + ".png"; 

//vierde dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber4 = getRandomInt(6);
  console.log(myNumber4)
  fourthDice.src = "./img/dice-" + myNumber4 + ".png";  


// const thrownDice1 = document.querySelector('.thrown-dice1');
// const thrownDice2 = document.querySelector('.thrown-dice2');

const result1 = myNumber1 + myNumber2;
const result2 = myNumber3 + myNumber4;
// thrownDice1.textContent = result1;
// thrownDice2.textContent = result2;

const announcementBlock = document.querySelector(".announcement")
if (result1 > result2) {
  announcementBlock.textContent = "Je hebt gewonnen!";
} else {
  announcementBlock.textContent = "Je hebt verloren!"
}

if (result1 === result2) {
  announcementBlock.textContent = "Gooi het nog een keer!"
}
})















  


