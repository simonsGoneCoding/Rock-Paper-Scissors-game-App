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
  // console.log(game.playerHand)
  hands.forEach(hand => hand.style.boxShadow = '')
  this.style.boxShadow = '0 0 0 4px yellow'
}

const aiChoice = function () {
  return hands[Math.floor(Math.random() * 3)].dataset.option

}

const checkResult = (player, ai) => {
  if (player === ai) {
    return 'draw'
  } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
    return 'win'
  } else {
    return 'loss'
  }
}

// steering function 
const startGame = function () {
  if (!game.playerHand) return alert('take your pick')
  game.aiHand = aiChoice()
  const gameResult = checkResult(game.playerHand, game.aiHand)
  console.log(gameResult)

}
hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame);