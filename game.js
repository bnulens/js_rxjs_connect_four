import { interval } from "rxjs";
// Game countdown
let gameCountDown$ = interval(3000);

gameCountDown$.subscribe(console.log);