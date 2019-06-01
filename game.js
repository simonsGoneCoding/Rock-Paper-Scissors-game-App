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

//computer choice function
const aiChoice = function () {
  return hands[Math.floor(Math.random() * 3)].dataset.option

}

//checking results function 
const checkResult = (player, ai) => {
  if (player === ai) {
    return 'draw'
  } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
    return 'win'
  } else {
    return 'loss'
  }
}

//publishing the results 
const publishResult = (player, ai, result) => {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

  if (result === 'win') {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-wins"]').style.color = 'green'
    document.querySelector('[data-summary="who-wins"]').textContent = 'YOU';
  } else if (result === 'draw') {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-wins"]').textContent = 'no one';
    document.querySelector('[data-summary="who-wins"]').style.color = 'grey'
  } else {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-wins"]').textContent = 'computer';
    document.querySelector('[data-summary="who-wins"]').style.color = 'red'
  }
}

//steering function 
const startGame = function () {
  if (!game.playerHand) return alert('take your pick')
  game.aiHand = aiChoice()
  const gameResult = checkResult(game.playerHand, game.aiHand)
  console.log(gameResult)
  publishResult(game.playerHand, game.aiHand, gameResult)
}
hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame);