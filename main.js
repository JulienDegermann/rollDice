// buttons
const newGame = document.querySelector('#newGame')
const rollDice = document.querySelector('#rollDice')
const hold = document.querySelector('#hold')
// -----------------------------------------------------------------

// player 1
const player1Container = document.querySelector('#player1') // container
const player1RoundScore = document.querySelector('#roundScore1')
const player1GlobalScore = document.querySelector('#globalScore1')
// -----------------------------------------------------------------

// player 2
const player2Container = document.querySelector('#player2')
const player2RoundScore = document.querySelector('#roundScore2')
const player2GlobalScore = document.querySelector('#globalScore2')
// -----------------------------------------------------------------

// reset
const resetElements = document.querySelectorAll('.reset')

const dice = document.querySelector('#dice')
dice.innerText = '0'
player1RoundScore.innerText = '0'
player2RoundScore.innerText = '0'

const current = document.querySelector('.current')
let currentPlayer = document.createElement('div')
currentPlayer.classList.add('active')
currentPlayer.classList.add('bg-danger')
current.append(currentPlayer)
console.log(currentPlayer)


const switchPlayer = () => {
  player1Container.classList.toggle('current')
  player2Container.classList.toggle('current')
  if (player1Container.classList.contains('current')) {
    player1Container.append(currentPlayer)
    currentPlayer.style.setProperty('transform', 'translateX(100px')
  } else {
    player2Container.append(currentPlayer)
    currentPlayer.style.setProperty('transform', 'translateX(-100px')
  }
}



const roll = () => { // dice roll
  let currentRoll = Math.floor(Math.random() * 6 + 1)
  dice.innerText = currentRoll
  if (currentRoll === 1) {
    player1RoundScore.innerText = 
    player2RoundScore.innerText = 0
    switchPlayer()
  } else {
    player1Container.classList.contains('current') ? player1RoundScore.innerText = Number(player1RoundScore.innerText) + currentRoll : player2RoundScore.innerText = Number(player2RoundScore.innerText) + currentRoll
  }
}
const reset = () => {
  document.location.reload() // reload page
}


const save = () => {
  if (dice.innerText === '0') {
    return
  } else {
    player1Container.classList.contains('current') ? player1GlobalScore.innerText = Number(player1GlobalScore.innerText) + Number(player1RoundScore.innerText) : player2GlobalScore.innerText = Number(player2GlobalScore.innerText) + Number(player2RoundScore.innerText)
    player1RoundScore.innerText = 0
    player2RoundScore.innerText = 0    
    dice.innerText = 0
    if (Number(player1GlobalScore.innerText) > 99) {
      player1Container.firstElementChild.innerText += `WINNER`
      rollDice.disabled = true
      hold.disabled = true
    } else if(Number(player2GlobalScore.innerText) > 99) {
      player2Container.firstElementChild.innerText += `WINNER`
      rollDice.disabled = true
      hold.disabled = true
    } else {
      switchPlayer()
    }
  }
  
}

rollDice.addEventListener('click', roll)
newGame.addEventListener('click', reset)
hold.addEventListener('click', save)
