import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const GROUND = 27;
const PLAYER_SPEED = 500;
const JUMP_SPEED = 900;
const GRAVITY = -2500;

let goon = sprites[0];
goon.image = "🧟";
goon.x = 25;
goon.y = 27;

let player = sprites[1];
player.image = "🧍‍♂️";
player.x = 775;
player.y = 27;
let yVelocity = 0;
let xVelocity = 0;

text.color = "orange";
text.title = "Goon Dodger";

let gameOver = false;

function frame(t, dt) {
    if (gameOver){
        if (buttons.space){
            gameOver = false;
            text.title = "Goon Dodger"
        }
        return;
    }


    if (buttons.right) {
        xVelocity = PLAYER_SPEED;
    } else if (buttons.left) {
        xVelocity = -PLAYER_SPEED;
    } else {
        xVelocity = 0;
    }

    if (buttons.up && player.y == GROUND) {
        yVelocity = JUMP_SPEED;
    }

    player.y += yVelocity * dt;
    player.x += xVelocity * dt;

    if (player.y > GROUND) {
        yVelocity = yVelocity + GRAVITY * dt;
    } else {
        yVelocity = 0;
        player.y = GROUND;
    }

    if (player.x < 0)
        player.x = 0;
    if (player.x > WIDTH)
        player.x = WIDTH;

    if (xVelocity == 0) {
        player.image = "🧍‍♂️";
    } else {
        if (player.y > GROUND) {
            player.image = "🏃‍♂️";
        } else {
            player.image = (Math.round(t * 10) % 2) ? "🚶‍♂️" : "🏃‍♂️";
        }

        player.flipH = xVelocity > 0;
    }

    goon.x = goon.x + 6.5

    if (goon.x < 0)
        goon.x = WIDTH;
    if (goon.x > WIDTH)
        goon.x = 0;
    
    if (touching(goon, player)) {
        text.title = "Game Over<br>Hit space to restart!"
        player.image = "😵";
        gameOver = true;
    }

}


function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 10 && yDistance < 10)
        return true;
    else
        return false;
}

let name = "Goon Dodger";

let background = {
    'background': 'url("https://img.freepik.com/premium-vector/ice-hockey-player-sport-with-puck-skates-ice-surface-game-championship-illustration_2175-8890.jpg")',
    'background-size': 'cover'

};

export {
    name,
    background,
    frame
}