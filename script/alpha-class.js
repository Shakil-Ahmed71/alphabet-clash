

// function play() {
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){

        const currentScoreElement = document.getElementById('current-crore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;


        console.log('You got a point', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();


    } else {
        console.log('You are loose');
        const currentLifeElement = document.getElementById('current-life');

        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);




function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('may number', alphabet);

    const currentRendomAlphabet = document.getElementById('current-alphabet');
    currentRendomAlphabet.innerText = alphabet;

    addBackgroundColorById(alphabet);

}



function play() {
    hideElementById('home-screen');

    showElementById('play-ground');

    continueGame();
}