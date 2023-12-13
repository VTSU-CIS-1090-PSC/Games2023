import buttons from '../buttons.js';
import sprites from '../sprites.js';
import { WIDTH, HEIGHT } from '../screen.js';

//Set some numerical constants
const GROUND = 80;
const GRAVITY = -20;

//Set up the ball sprite.
const ball = sprites[0];
ball.image = "⚽";
ball.x = 50;
ball.y = 450;

//Game state
//How fast is it moving, up or down?
let yVelocity = 0;

function frame(t, dt) {

    //Adjust the ball's position by adding the yVelocity to the ball's y position
    ball.y += yVelocity;

    //If the ball hit the ground, bounce it!
    if (ball.y <= GROUND) {
        yVelocity = yVelocity * -0.9;
        ball.y = GROUND;
    }

    //Every frame the y velocity gets GRAVITY added to it
    yVelocity = yVelocity + GRAVITY * dt;

    //Make it move right a little bit every frame...
    //If it hits the right, make it stop.
    if (ball.x < WIDTH){
        ball.x += 100 * dt;
        ball.rotation += 200 * dt;
    }
}

const name = "Bouncing Ball";

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