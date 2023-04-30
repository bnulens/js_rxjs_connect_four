import { gameGridArray } from "./grid";
import { interval } from "rxjs";
import { scan, map, tap, takeWhile } from "rxjs/operators";

console.log("game logic")
console.log(gameGridArray);
// Display grid after countdown

// Game countdown
// Stream
// const counter$ = interval(1000);

// counter$
//   .pipe(
//     map(() => -1),
//     scan((accu, curr) => {
//       return accu + curr;
//     }, 4),
//     // tap(console.log)
//     takeWhile((value) => value >= 0)
//     )
//   .subscribe((value) => {
//     console.log(value)
//     if (!value) {
//         console.log("Start !")
//     }
// });

// Determine which player goes first + Start turn on said player

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


