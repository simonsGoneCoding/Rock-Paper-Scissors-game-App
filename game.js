const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

const game = {
  playerHand: '',
  aiHand: ''
}

const hands = [...document.querySelectorAll('.select img')];

//player choice function 
function handSelection() {
  game.playerHand = this.dataset.option;
  console.log(game.playerHand)
  hands.forEach(hand => {
    hand.style.boxShadow = '';
  })
  this.style.boxShadow = '0 0 0 4px yellow'
}

hands.forEach(hand => hand.addEventListener('click', handSelection))