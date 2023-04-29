'use strict'

import { fromEvent } from 'rxjs';

let simpleButton = document.getElementById('test');

fromEvent(simpleButton, 'click').subscribe(() => {
    import('./game.js')
    .then(module => {
        simpleButton.style.visibility = "hidden";
        console.log(module);
    })
    .catch(error => console.log('Error!'));
});