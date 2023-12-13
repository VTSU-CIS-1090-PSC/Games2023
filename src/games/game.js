import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';


function frame(t, dt) {
    text.title = "My Game";
    text.score = "Score: 0";
}

let name = "My Game";

let background = {
    'background-color': 'gray',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}