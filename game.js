import { gameGridArray } from "./grid";
import { interval } from "rxjs";
import { scan, map, tap, takeWhile } from "rxjs/operators";

// Determine which player goes first + Start turn on said player
let player1Turn;
let player2Turn;

// Display grid after countdown
// Game countdown
// Stream
const counter$ = interval(1000);
counter$
  .pipe(
    map(() => -1),
    scan((accu, curr) => {
      return accu + curr;
    }, 4),
    // tap(console.log)
    takeWhile((value) => value >= 0)
    )
  .subscribe((value) => {
    console.log(value)
    if (!value) {
        console.log("Start !")
        // Determining who gets to start the game
        let starterChance = Math.floor(Math.random() * 2);
        if (starterChance == 0) {
          player1Turn = true;
          player2Turn = false
        } else {
          player1Turn = false
          player2Turn = true
        }
        console.log("p1",player1Turn, "p2",player2Turn)
    }
});

// Start countdown on player
// Each player has a set amount of time to try and win the game (chess clock)

/*
  --- Determining a move ---
  1. Moves can only be made in columns
  2. A click on a column adds a player's coin to the array starting from 0 (zero-based)
  3. A column can get full => disable the column
  4. Determine legality
*/  

/*
  --- Determining legal moves ---
  1. Is column array full ?
  2. Is there a winning combination => continue or end game
  3. 
*/


