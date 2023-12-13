import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const SPEED = 200

let penguin = sprites[1]
penguin.image = "🐧";
penguin.x = 50;
penguin.y = 50;

let chocBars = [ sprites[2], sprites[3], sprites[4], sprites[5], sprites[6], sprites[7]];

for (let choc of chocBars) {
    choc.image = "🍫";
    choc.x = Math.random() * WIDTH;
    choc.y = Math.random() * HEIGHT;
}

function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 50 && yDistance < 50)
        return true;
    else
        return false;
}

let score = 0;

function frame(t, dt) {

    if (buttons.right)
        penguin.x += SPEED * dt;
    if (buttons.left)
        penguin.x -= SPEED * dt;
    if (buttons.up)
        penguin.y += SPEED * dt;
    if (buttons.down)
        penguin.y -= SPEED * dt;


    if (penguin.x < 0)
        penguin.x = WIDTH;
    if (penguin.x > WIDTH)
        penguin.x = 0;

    if (penguin.y < 0)
        penguin.y = 0;

    if (penguin.y > HEIGHT)
        penguin.y = HEIGHT;


    text.score = "Score: " + score;

    for (let choc of chocBars){
        if ( touching(penguin, choc) && choc.image == "🍫" ){
            score++;
            choc.image = "";
        }
    }
}

let name = "My Game";

let background = {
    'background-color': 'blue',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}