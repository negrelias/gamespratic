// let num1 = (document.getElementById("numero1").textContent = 2);
// let num2 = document.getElementById("numero2");
// let num3 = (document.getElementById("numero3").textContent = 10);
// let toto = document.getElementById("resultado");

// function sum() {
// const soma = num1 + num3;

// num2.textContent = " + ";

// toto.textContent = " Total " + " : " + soma;
// }

// function divisao() {
// const divi = num1 / num3;

// num2.textContent = " / ";

// toto.textContent = " Total " + " : " + divi;
// }

// function sub() {
// const susu = num1 - num3;

// num2.textContent = " - ";

// toto.textContent = " Total " + " : " + susu;
// // // }

// function multi() {
// const mul = num1 * num3;

// num2.textContent = " * ";

// toto.textContent = " Total " + " : " + mul;
// }

// ####################################//

let inicio = document.getElementById("star");

let arr = [];
let sum = 0;
let isLive = false;
let hasBlackjack = false;
let message = "";
let messageText = document.getElementById("texto");
let sumo = document.querySelector(".text-1");
let car = document.querySelector(".text-2");
let total = { name: "Per :", toto: 145 };

let chama = document.getElementById("money-el");

chama.textContent += total.name + " $ " + total.toto;

function getRandomCard() {
  let radomNumber = Math.floor(Math.random() * 13) + 1;

  if (radomNumber > 10) {
    return 10;
  } else if (radomNumber === 1) {
    return 11;
  } else {
    return radomNumber;
  }
}

function star() {
  isLive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  arr = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  car.textContent = "Cards : ";
  sumo.textContent = "Sum : " + sum;

  for (let i = 0; i < arr.length; i++) {
    car.textContent += arr[i] + " ";
  }

  if (sum <= 20) {
    message = "do you wanr draw a cart";
  } else if (sum === 21) {
    message = "whooo! you have got b;ackjack";
    hasBlackjack = true;
  } else {
    message = "you are out of the game";
    isLive = false;
  }
  messageText.textContent = message;
}

function newcard() {
  if (isLive === true && hasBlackjack === false) {
    let cards = getRandomCard();
    sum += cards;
    arr.push(cards);
    console.log(arr);
    renderGame();
  }
  // posso chama outro funcao dentro da funcao
}
