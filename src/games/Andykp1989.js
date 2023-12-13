import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

//set a speed.
const SPEED = 3;

let score = 0;

text.color = "white";

//Player ship sprite.
let player = sprites[0];
player.image = "🚀";
player.x = WIDTH / 2;
player.y = 100;
let vx = 0;
let vy = 0;
player.rotation = -45;

//Comet Sprite.
let comet1 = sprites[1];
comet1.image = "☄️";
comet1.x = Math.random() * WIDTH;
comet1.y = 480;
comet1.rotation = -45;
let touch = .1;

//return true if sprites a and b are touching.
let a = function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 30 && yDistance < 30) {
        touch++
        score++
        comet1.x = Math.random() * WIDTH;
        comet1.y = 480;
        return true;
    }
    else {
        return false;
    }

}

function frame(t, dt) {

    text.score = "Score: " + score;

    a(player, comet1);

    //Change comet fall speed
    comet1.y += -.15 * touch;

    //Buttons control velocity
    if (buttons.right)
        vx += SPEED + 10;
    if (buttons.left)
        vx -= SPEED + 10;
    if (buttons.up)
        vy += SPEED + 10;
    if (buttons.down)
        vy -= SPEED + 10;

    //Velocity slows each frame
    vx *= .98;
    vy *= .98;

    //Change player position
    player.x += vx * dt;
    player.y += vy * dt;

    //if player goes a certain direction then rotate the rocket ship that way
    if (buttons.up && buttons.left)
        player.rotation = -90
    else if (buttons.right && buttons.up)
        player.rotation = +0;
    else if (buttons.down && buttons.left)
        player.rotation = -180;
    else if (buttons.down && buttons.right)
        player.rotation = +90;
    else if (buttons.left)
        player.rotation = -135;
    else if (buttons.right)
        player.rotation = +45;
    else if (buttons.down)
        player.rotation = +135;
    else if (buttons.up)
        player.rotation = -45;


    // WRAP it around left and right
    if (player.x < 25)
        player.x = 25;

    if (player.x > 775)
        player.x = 775;


    // STOP player when player goes too far UP or DOWN
    if (player.y > 470)
        player.y = 470;

    if (player.y < 30)
        player.y = 30;

    //Don't let comet go too far right or left
    if (comet1.x < 25)
        comet1.x = 25;

    if (comet1.x > 775)
        comet1.x = 775;

    // if player collects 30 then win, else game over and either way the player can't keep playing
    if (score == 30) {
        text.title = "You win! <br>" + "Your final score is " + score + "!";
        a = function noTouching(a, b) {
            let xDistance = Math.abs(a.x - b.x);
            let yDistance = Math.abs(a.y - b.y);
            if (xDistance < 0 && yDistance < 0) {
                touch++
                score++
                comet1.x = Math.random() * WIDTH;
                comet1.y = 480;
                return true;
            }
            else {
                return false;
            }

        }
    } else if (comet1.y < 30) {
        comet1.y = 30;
        comet1.image = "💥";
        text.title = "GAME OVER <br>" + "Your final score is " + score + "!";
        a = function noTouching(a, b) {
            let xDistance = Math.abs(a.x - b.x);
            let yDistance = Math.abs(a.y - b.y);
            if (xDistance < 0 && yDistance < 0) {
                touch++
                score++
                comet1.x = Math.random() * WIDTH;
                comet1.y = 480;
                return true;
            }
            else {
                return false;
            }
        }
    }
}

let name = "Comet Collector";

let background = {
    'background': 'url("https://img.freepik.com/free-vector/earth-space-scene_1308-32313.jpg?w=1380&t=st=1701360976~exp=1701361576~hmac=1a678d62ed0b41bb4922d2830d5e30fb43339df5b27fc403c4d75ed5c1f866d3")',
    'background-size': 'cover'
}

export {
    name,
    background,
    frame
}