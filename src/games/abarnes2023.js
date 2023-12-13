import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const GROUND = 80;
const PLAYER_SPEED = 500;
const JUMP_SPEED = 900;
const GRAVITY = -2500;

let player = sprites[0];
player.image = "🧍‍♂️";
player.x = 100;
player.y = GROUND;
let yVelocity = 0;

   
function frame(t, dt) {
    text.title = "";
    text.score = "Score: 0";
}

let name = "Money Grabber";

let background = {
    "background-color": "skyblue",
    "background-image": "linear-gradient(#424299, skyblue)",
    "border-bottom": "50px solid green"
};

export {
    name,
    background,
    frame
}
