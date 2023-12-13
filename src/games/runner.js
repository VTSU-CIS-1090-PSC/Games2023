import buttons from '../buttons.js';
import sprites from '../sprites.js';
import { WIDTH, HEIGHT } from '../screen.js';

//Set some constants to use for the game
const GROUND = 80;
const PLAYER_SPEED = 500;
const JUMP_SPEED = 900;
const GRAVITY = -2500;

//Set up the player sprite
let player = sprites[0];
player.image = "🧍‍♂️";
player.x = 100;
player.y = GROUND;
let yVelocity = 0;
let xVelocity = 0;

// We'll get to know this code, then try to do the following:
//
// ❓1: Lower gravity until it feels like you are on the moon.
//      You might need to change the jump speed.
//
// ❓2: Change the background to black and the ground to grey.
//      Again, like the moon.
//
// ❓3: You can change direction while in the air. That's not possible!
//      Can you make it so that you keep moving in only the one
//      Direction after you jump?

function frame(t, dt) {

    //Update hero's X Velocity based right / left button
    if (buttons.right) {
        xVelocity = PLAYER_SPEED;
    } else if (buttons.left) {
        xVelocity = -PLAYER_SPEED;
    } else {
        xVelocity = 0;
    }

    //If up button, AND player is on the ground
    //give the hero an upwards Y Velocity. (JUMP)
    if (buttons.up && player.y == GROUND) {
        yVelocity = JUMP_SPEED;
    }

    //Change hero's location based on velocity 
    player.y += yVelocity * dt;
    player.x += xVelocity * dt;

    //Update y velocity using gravity
    if (player.y > GROUND) {
        //If he is in the air add gravity
        yVelocity = yVelocity + GRAVITY * dt;
    } else {
        //When he is at the ground, set it 0
        yVelocity = 0;
        player.y = GROUND;
    }

    //Limit hero's location to on the screen.
    if (player.x < 0)
        player.x = 0;
    if (player.x > WIDTH)
        player.x = WIDTH;


    //Finally animate the hero, by changing the image, based on
    //how he is moving...
    if (xVelocity == 0) {
        //Staying still? 
        //Use still person
        player.image = "🧍‍♂️";
    } else {
        //Moving left or right?
        if (player.y > GROUND) {
            //In the air? Always a running man
            player.image = "🏃‍♂️";
        } else {
            //Otherwise swap between two poses
            player.image = (Math.round(t * 10) % 2) ? "🚶" : "🏃‍♂️";
        }

        //Flip the sprite based on which way he is going
        player.flipH = xVelocity > 0;
    }
}

let name = "Running Person";

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