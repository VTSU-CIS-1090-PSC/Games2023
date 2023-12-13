import buttons from '../buttons.js';
import sprites from '../sprites.js';
import { WIDTH, HEIGHT } from '../screen.js';

//Set some constant values
const SPEED = 300;

//Set up the UFO sprite
let ufo = sprites[0];
ufo.image = "🛸";
ufo.x = WIDTH / 2;
ufo.y = HEIGHT / 2;

function frame(t, dt) {

    //Make the UFO based on arrow keys
    if (buttons.right)
        ufo.x += SPEED * dt;
    if (buttons.left)
        ufo.x -= SPEED * dt;
    if (buttons.up)
        ufo.y += SPEED * dt;
    if (buttons.down)
        ufo.y -= SPEED * dt;

    // WRAP it around left and right
    if (ufo.x < 0)
        ufo.x = WIDTH;
    if (ufo.x > WIDTH)
        ufo.x = 0;

    // STOP it when it goes too far UP or DOWN
    if (ufo.y < 0)
        ufo.y = 0;

    if (ufo.y > HEIGHT)
        ufo.y = HEIGHT;
}

let name = "UFO Pilot";

let background = {
    'background': 'url("https://i.pinimg.com/originals/14/6f/2e/146f2e03de9241371f684d129c2b4060.jpg")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}