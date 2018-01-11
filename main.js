const tips = [
  "From your coinbase account, you can also buy Bitcoin ( BTC ), Litecoin ( LTC ) and Bitcoin Cash ( BCH ).",
  "Buying and selling anything based on 'tips' is the best way to lose money. Do your own research.",
  "Altcoins and Bitcoin often move in opposite directions of each other ( but not always ).",
  "Never invest more than you can afford to lose"
];

let tipElement = document.querySelector(".quick-tip p");

function getRandomTip() {
  tipElement.innerHTML = tips[Math.floor(Math.random() * tips.length - 1) + 1];
  console.log("tip");

  // and schedule a repeat
  setTimeout(getRandomTip, 12000);
}

// start the cycle
getRandomTip();

setTimeout(() => {
  tipElement.classList = "show";
}, 3000);
