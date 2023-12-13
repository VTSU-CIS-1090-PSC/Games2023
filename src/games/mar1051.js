import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';



const ball = sprites[0];
ball.image = "⚽";
ball.x = 50;
ball.y = 450;

let ySpeed = 0;

const GROUND = 80;
const GRAVITY = -20;

function frame(t, dt) {
    text.title = "My Game";
    text.score = "Score: 0";

    if (buttons.right)
        ball.x += SPEED * dt;
    if (buttons.left)
        ball.x -= SPEED * dt;
    if (buttons.up)
        ball.y += SPEED * dt;
    if (buttons.down)
        ball.y -= SPEED * dt;

    ball.y += ySpeed * dt;

    ySpeed = ySpeed - GRAVITY * dt;

    if (ball.y <= 80) {
        ySpeed = ySpeed * -.08;
        ball.y = 80;
    }
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

