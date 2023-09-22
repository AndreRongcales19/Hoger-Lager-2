const btnThrow = document.querySelector(".throw");
btnThrow.addEventListener('click', function(){
  //eerste dubbelsteen//
function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber1 = getRandomInt(6);
  console.log(myNumber1)

//tweede dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber2 = getRandomInt(6);
  console.log(myNumber2)  

//deerde dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber3 = getRandomInt(6);
  console.log(myNumber3)  

//vierde dubbelsteen

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
  }
  const myNumber4 = getRandomInt(6);
  console.log(myNumber4)  


const thrownDice1 = document.querySelector('.thrown-dice1');
const thrownDice2 = document.querySelector('.thrown-dice2');

const result1 = myNumber1 + myNumber2;
const result2 = myNumber3 + myNumber4;
thrownDice1.textContent = result1;
thrownDice2.textContent = result2;

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













  


