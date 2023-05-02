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
dice.innerText = ''
player1RoundScore.innerText = '0'
player2RoundScore.innerText = '0'

const current = document.querySelector('.current')
let currentPlayer = document.createElement('div')
currentPlayer.classList.add('active')
currentPlayer.classList.add('bg-danger')
current.firstElementChild.appendChild(currentPlayer)
console.log(currentPlayer)

const winner = document.createElement('span')
winner.classList.add('winner') // add winner span in absolute position

let diceImg = document.createElement('div') // adding dice image
diceImg.classList.add('diceImg')

const switchPlayer = () => {
  player1Container.classList.toggle('current')
  player2Container.classList.toggle('current')
  if (player1Container.classList.contains('current')) {
    document.querySelector('.current').firstElementChild.appendChild(currentPlayer)
    currentPlayer.style.removeProperty('left', '-20px')
    currentPlayer.style.setProperty('right', '-20px')
  } else {
    document.querySelector('.current').firstElementChild.appendChild(currentPlayer)
    currentPlayer.style.removeProperty('right', '-20px')
    currentPlayer.style.setProperty('left', '-20px')  }
}

const roll = () => { // dice roll
  let currentRoll = Math.floor(Math.random() * 6 + 1)
  switch (currentRoll) {
    case 1:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="1.5"/>
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
    </svg>`
      break;
    case 2:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`
      break;
    case 3:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`
      break;
    case 4:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`
      break;
    case 5:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`
      break;
    case 6:
      diceImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`
      break;
  }
  dice.appendChild(diceImg)

  if (currentRoll === 1) {
    player1RoundScore.innerText = 0
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
  if (player1RoundScore.innerText === '0'&& player2RoundScore.innerText === '0') {
    return
  } else {
    player1Container.classList.contains('current') ? player1GlobalScore.innerText = Number(player1GlobalScore.innerText) + Number(player1RoundScore.innerText) : player2GlobalScore.innerText = Number(player2GlobalScore.innerText) + Number(player2RoundScore.innerText)
    player1RoundScore.innerText = 0
    player2RoundScore.innerText = 0
    if (Number(player1GlobalScore.innerText) > 99) {
      console.log(document.querySelector('.current'))
      winner.innerText += `WINNER`
      document.querySelector('.current').append(winner)


      rollDice.disabled = true
      hold.disabled = true
    } else if (Number(player2GlobalScore.innerText) > 99) {
      console.error(document.querySelector('.current'))
      winner.innerText += `WINNER`
      document.querySelector('.current').append(winner)

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