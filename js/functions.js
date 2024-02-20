const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "ohjelmointi",
    "javascript",
    "tietokanta",
    "muuttuja",
    "olio",
    "tyylitiedosto",
    "python"
]

let randomizedWord = ''
let maskedWord = ''
let numberOfGuess = 0

const newGame = () => {
    const random = Math.floor(Math.random()*7) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    numberOfGuess = 0
    span.innerHTML = ''
}

const win = () => {
    alert(`Arvasit oikein! Oikea sana on ${randomizedWord}. Tarvitsit ${numberOfGuess} arvausta.`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i<randomizedWord.length; i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        numberOfGuess++
        
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase)
            win()
        } else {
        alert("Arvasit väärin!")

        }
        input.value=''
    span.innerHTML = numberOfGuess
    }
    
})