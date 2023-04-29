import { interval, take } from "rxjs";

let gameGrid = document.getElementById("game-grid");
gameGrid.style.visibility = "hidden";

// Display grid after countdown
// Game countdown
interval(1000)
.pipe(take(4))
.subscribe({ next: console.log, complete: () => console.log("Completed !") });

// Determine which player goes first + Start turn on said player
// Start countdown on player
// Determine a move 

// If move is made
// a) check legality move
// b) register move to object
// b) switch turn to other player

