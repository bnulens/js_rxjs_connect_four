// We can load the external script after the grid has been built
async function loadGameLogic() {
    try {
        await import('./game.js');
    } 
    catch (error) {
        console.log(error)
    }
};

// Dynamically generate a grid after 'Start game' is clicked
let gameMountingPoint = document.getElementById("game-mounting-point")
let newGrid = document.createElement("ul");
newGrid.classList.add('game-grid')
newGrid.setAttribute('id', 'game-grid');
gameMountingPoint.appendChild(newGrid);

// gameGridArray is an array of arrays referencing all the positions on the grid
let gameGridArray = [];
// gameGrid is the HTML grid consisting of unordered lists
let gameGrid = document.getElementById('game-grid');

// This function generates a grid depending on the preferred size
// This function also pushes references to the positions into gameGridArray
const makeGridFromSessionStorage = (gridSizeString) => {
    if (!gridSizeString) {
        console.error('error')
    } else {
        // Getting the columns and rows for the grid in string
        // let [gridColumns, gridRows] = gridSizeString.split('x');

        // gridX-Y are numbers used to define the amount of tiles to build the grid 
        let [gridX, gridY] = gridSizeString.split('x').map(num => +num);
        
        // Each column has it's own array
        for (let i = 0; i < gridX; i++) {
            let gridColumnArray = [];
            // Each column is an unordered list
            let gridColumn = document.createElement("ul");

            // The height of the grid is defined by gridY
            for (let j = 0; j < gridY; j++) {
                // Generating gridY times list elements 
                let gridColumnItem = document.createElement("li");
                gridColumnItem.classList.add(`${j}`);
                // Appending every list item to gridColumn
                gridColumn.appendChild(gridColumnItem);

                // Push every list item into gridColumnArray for future reference
                gridColumnArray.push(gridColumnItem);
            }
            gameGrid.appendChild(gridColumn);
            gameGridArray.push(gridColumnArray);
        }
        return gameGridArray
    }
}

makeGridFromSessionStorage(window.sessionStorage.getItem('grid-size'));
// Load game logic when grid is built
loadGameLogic();

export { gameGridArray };