function shiftCharacter(char, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = alphabet.toLowerCase();

    if (alphabet.includes(char)) {
        return alphabet[(alphabet.indexOf(char) + shift) % 26];
    } else if (lowerAlphabet.includes(char)) {
        return lowerAlphabet[(lowerAlphabet.indexOf(char) + shift) % 26];
    } else {
        return char;
    }
}

function animateCaesarCipher(text, shift, interval) {
    const displayElement = document.getElementById("cipherDisplay");
    let animatedText = "";
    let index = 0;

    const animationInterval = setInterval(() => {
        if (index < text.length) {
            const char = text[index];
            animatedText += shiftCharacter(char, shift);
            displayElement.textContent = animatedText;
            index++;
        } else {
            clearInterval(animationInterval);
        }
    }, interval);
}

document.addEventListener("DOMContentLoaded", () => {
    const originalText = "";
    const shiftValue = 20;
    const animationSpeed = 300;

    animateCaesarCipher(originalText, shiftValue, animationSpeed);
});
