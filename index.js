'use strict'

async function loadGrid() {
    try {
        await import('./grid.js');
    } 
    catch (error) {
        console.log(error)
    }
};

// Initially setting game button on disabled
// Enable when size is set
let startGameButton = document.getElementById('start-game-button');

// Settings node will be deleted when starting the game
let settingsNode = document.getElementById('settings-element');
startGameButton.setAttribute('disabled', true);

// Setting an eventlistener on every relevant grid-size option and capturing the value
let gridSizeOptions = [... document.getElementsByClassName('game-grid-size-option')];

gridSizeOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        let optionValue = e.target.value;
        if (optionValue != "0") {
            sessionStorage.setItem('grid-size', optionValue);
            startGameButton.removeAttribute('disabled');
            console.log("get item", window.sessionStorage.getItem('grid-size')); 
        } else {
            startGameButton.setAttribute('disabled', true);
        }
    })
})

startGameButton.addEventListener('click', () => {
    settingsNode.remove();
    loadGrid();
})