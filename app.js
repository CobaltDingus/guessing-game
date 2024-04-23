console.log('guessing game');

let secretNumber = generateSecretNumber()
let tries = 0

const choicesElems = document.querySelectorAll('.choices button')
const messageElem = document.querySelector('.message')
const resetElem = document.querySelector('.reset-btn')
const triesElem = document.querySelector('.tries-counter')

resetElem.addEventListener('click', reset)


for (choices of choicesElems) {
    choices.addEventListener('click', handleGuess)
}

function generateSecretNumber() {
    return Math.floor(Math.random() * 9 + 1)
}

function handleGuess(event) {
    const elem = event.target
    const userGuess = Number(elem.textContent)

    elem.disabled = true
    tries++
    triesElem.textContent = tries

    if (userGuess === secretNumber) {
        messageElem.textContent = `You guessed it right! The secret number was ${secretNumber}!`
        resetElem.style.display = 'initial'
    } else {
        messageElem.textContent = `You guessed it wrong! The secret number wasn't ${userGuess}!`
    }
}

function reset() {
    for (choices of choicesElems) {
        choices.disabled = false
    }
    tries = 0
    triesElem.textContent = tries
    resetElem.style.display = 'none'
    messageElem.textContent = ""
    secretNumber = generateSecretNumber()
}