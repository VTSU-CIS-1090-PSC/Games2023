import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const SPEED = 200;
const GROUND = 80;
const GRAVITY = 400;


let net = sprites[0];
net.image = "🥅"
net.x = 750
net.y = 80

let ball = sprites[1];
ball.image = "⚽"

let name = "soccer";


const background = {
    "background-color": "skyblue",
    "background-image": "linear-gradient(#424299, skyblue)",
    "border-bottom": "50px solid green"
};


export {
    name,
    background,
    frame
}
//return true if sprites a and b are touching
function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 10 && yDistance < 10)
        return true;
    else
        return false;
}

let ySpeed = 0

function frame(t, dt) {
    if (touching(ball, net)) {
        text.title = "Goal!!!";
        return;
    }

    for ( let i = 2; i <=12; i++ ){
        if ( touching(ball, sprites[i] ) ){
            ball.x = ball.y = 0;
        }
    }
    //Make the ball based on arrow keys
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

    if (ball.y < 80) {
        ySpeed = ySpeed * -0.8;
        ball.y = 80
    }
    if (ball.y > 500) {
        ySpeed = ySpeed * -0.8;
        ball.y = 500;
    }
    if (ball.x < 0)
        ball.x = 0;
    if (ball.x > WIDTH)
        ball.x = WIDTH;
}

const wall = sprites[2];
wall.image = "🧱"
wall.x = 400
wall.y = 80
const wall2 = sprites[3]
wall2.image = "🧱"
wall2.x = 400
wall2.y = 140
const wall3 = sprites[4];
wall3.image = "🧱"
wall3.x = 400
wall3.y = 200

const wall4 = sprites[5];
wall4.image = "🧱"
wall4.x = 200
wall4.y = 470
const wall5 = sprites[6]
wall5.image = "🧱"
wall5.x = 200
wall5.y = 400
const wall6 = sprites[7];
wall6.image = "🧱"
wall6.x = 200
wall6.y = 330
const wall7 = sprites[8];
wall7.image = "🧱"
wall7.x = 200
wall7.y = 260

const wall8 = sprites[9];
wall8.image = "🧱"
wall8.x = 600
wall8.y = 470
const wall9 = sprites[10]
wall9.image = "🧱"
wall9.x = 600
wall9.y = 400
const wall10 = sprites[11];
wall10.image = "🧱"
wall10.x = 600
wall10.y = 330
const wall11 = sprites[12];
wall11.image = "🧱"
wall11.x = 600
wall11.y = 260