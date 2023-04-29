// We can load the external script anywhere we want 
async function loadGameLogic() {
    try {
        await import('./game.js');
    } 
    catch (error) {
        console.log(error)
    }
};

let gameGrid = document.getElementById('game-grid');

// This function generates a grid depending on the preferred size
const makeGridFromSessionStorage = (gridSizeString) => {
    // Here we get the columns and rows for the grid in string
    let [gridColumns, gridRows] = gridSizeString.split('x');
    // gridX-Y are numbers used to define the amount of tiles to build the grid 
    let [gridX, gridY] = gridSizeString.split('x').map(num => +num);
    
    gameGrid.classList.add(`size-${gridColumns}-${gridRows}`);
    
    for (let i = 0; i < gridX; i++) {
        let gridColumnList = document.createElement("ul");
        gameGrid.appendChild(gridColumnList);

        for (let j = 0; j < gridY; j++) {
            let gameGridTile = document.createElement('li');
            // Tiles are not zero-based !
            gameGridTile.setAttribute("value",j + 1);
            gridColumnList.appendChild(gameGridTile)
        }
    }

    // Load game logic when grid is built
    loadGameLogic();
}

makeGridFromSessionStorage(window.sessionStorage.getItem('grid-size'));

  