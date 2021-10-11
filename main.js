let A = document.getElementById('A');
let B = document.getElementById('B');
let C = document.getElementById('C');
let D = document.getElementById('D');
let E = document.getElementById('E');
let F = document.getElementById('F');
let G = document.getElementById('G');
let H = document.getElementById('H');
let I = document.getElementById('I');
let J = document.getElementById('J');
let K = document.getElementById('K');
let L = document.getElementById('L');
let M = document.getElementById('M');
let N = document.getElementById('N');
let O = document.getElementById('O');
let P = document.getElementById('P');
let Q = document.getElementById('Q');
let R = document.getElementById('R');
let S = document.getElementById('S');
let T = document.getElementById('T');
let U = document.getElementById('U');
let V = document.getElementById('V');
let W = document.getElementById('W');
let X = document.getElementById('X');
let Y = document.getElementById('Y');
let Z = document.getElementById('Z');
let mysteryWord = document.getElementById('mysteryWord');
let guessDisplay = document.getElementById('guesses');
guessesRemaining = 6;
guessDisplay.innerText = guessesRemaining;
let end = document.getElementById('endText');
let deadLetters = document.getElementById('deadLetters');
let chosenWord = words[Math.floor(Math.random() * words.length)]
chosenWord = chosenWord.toUpperCase();
let wordDisplay = Array.from(chosenWord);
wordDisplay = wordDisplay.fill('_');

mysteryWord.innerText = wordDisplay.join(" ");

function checkLetter(letter) {
    if (guessesRemaining > 0 && deadLetters.innerText.includes(letter) === false && wordDisplay.includes("_")) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (letter === chosenWord[i]) {
                wordDisplay[i] = letter;
            }
        }
        mysteryWord.innerText = wordDisplay.join(" ")
        if (wordDisplay.includes(letter) === false) {
            deadLetters.innerText += letter;
            guessesRemaining--;
            guessDisplay.innerText = guessesRemaining;
            if (guessesRemaining === 0) {
                end.innerText = "You lose. The mystery word was " + chosenWord + ".";
            }
        }
    }
    if (wordDisplay.includes("_") === false) {
        end.innerText = "You win!";
    }
}


A.addEventListener('click', () => {
    checkLetter('A');
})
B.addEventListener('click', () => {
    checkLetter('B');
})
C.addEventListener('click', () => {
    checkLetter('C');
})
D.addEventListener('click', () => {
    checkLetter('D');
})
E.addEventListener('click', () => {
    checkLetter('E');
})
F.addEventListener('click', () => {
    checkLetter('F');
})
G.addEventListener('click', () => {
    checkLetter('G');
})
H.addEventListener('click', () => {
    checkLetter('H');
})
I.addEventListener('click', () => {
    checkLetter('I');
})
J.addEventListener('click', () => {
    checkLetter('J');
})
K.addEventListener('click', () => {
    checkLetter('K');
})
L.addEventListener('click', () => {
    checkLetter('L');
})
M.addEventListener('click', () => {
    checkLetter('M');
})
N.addEventListener('click', () => {
    checkLetter('N');
})
O.addEventListener('click', () => {
    checkLetter('O');
})
P.addEventListener('click', () => {
    checkLetter('P');
})
Q.addEventListener('click', () => {
    checkLetter('Q');
})
R.addEventListener('click', () => {
    checkLetter('R');
})
S.addEventListener('click', () => {
    checkLetter('S');
})
T.addEventListener('click', () => {
    checkLetter('T');
})
U.addEventListener('click', () => {
    checkLetter('U');
})
V.addEventListener('click', () => {
    checkLetter('V');
})
W.addEventListener('click', () => {
    checkLetter('W');
})
X.addEventListener('click', () => {
    checkLetter('X');
})
Y.addEventListener('click', () => {
    checkLetter('Y');
})
Z.addEventListener('click', () => {
    checkLetter('Z');
})