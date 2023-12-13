import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

//Set some constant values
const SPEED = 10;

//Set up the UFO sprite
let ufo = sprites[1];
ufo.image = "🛸";
ufo.x = WIDTH / 2;
ufo.y = HEIGHT / 2;
let vx = 0;
let vy = 0;

//Set up tractor beam
let beam = sprites[0];
beam.image = "🔊";
beam.rotation = 90;
let beams = ["🔈", "🔉", "🔊"];
let beamsy = [30, 34, 40];

//Set up the COW sprite
let cow = sprites[2];
cow.image = "🐄";
cow.x = Math.random() * WIDTH;;
cow.y = 70;
cow.flipH = Math.random() > .5;
let captureTime = 0;

let score = 0;

text.color = "white";

function frame(t, dt) {

    //Buttons control velocity
    if (buttons.right)
        vx += SPEED;
    if (buttons.left)
        vx -= SPEED;
    if (buttons.up)
        vy += SPEED;
    if (buttons.down)
        vy -= SPEED;

    //Velocity slows each rame
    vx *= .98;
    vy *= .98;

    //Change UFO position
    ufo.x += vx * dt;
    ufo.y += vy * dt;

    // Wrap UFO left and right
    if (ufo.x < 0)
        ufo.x = WIDTH;
    if (ufo.x > WIDTH)
        ufo.x = 0;

    //Stop UFO top and bottom
    if (ufo.y > HEIGHT) {
        ufo.y = HEIGHT;
        vy = 0;
    }
    if (ufo.y < 120) {
        ufo.y = 120;
        vy = 0;
    }

    // Clamp Cow left and right
    if (cow.x < 0)
        cow.x = 0;
    if (cow.x > WIDTH)
        cow.x = WIDTH;

    //Animate tractor beam
    if (buttons.space) {
        let i = Math.round(t * 10) % 3
        beam.image = beams[i];
        beam.y = ufo.y - beamsy[i];
        beam.x = ufo.x + 3;
    } else {
        beam.image = "";
    }

    if (captureTime <= 0) {
        //Tractor beam behavior
        let dCow = ufo.x - cow.x;
        cow.flipV = false;
        if (buttons.space && Math.abs(dCow) < 30 && cow.y < beam.y) {
            cow.y += 100 * dt;
            cow.x += dCow * 5 * dt;
        } else if (cow.y > 70) {
            cow.y -= 200 * dt;
            cow.flipV = true;
        }

        //Is cow delivered to the moon?
        if (cow.x > 620 && cow.x < 660 && cow.y > 350 && cow.y < 390) {
            captureTime = 1;
        }
    } else {
        cow.rotation += 900 * dt;
        captureTime -= dt;
        if ( captureTime < .2 ){
            cow.image = "⭐";
            score++;
        }
        if ( captureTime <= 0 ){
            cow.image = "🐄";
            cow.y = 70;
            cow.x = Math.random() * WIDTH;
            cow.flipH = Math.random() > .5;
            cow.rotation = 0;
        }
    }

    text.score = "Score: " + score;
}

let name = "Cow Capture";

let background = {
    'background': 'url("https://i.pinimg.com/originals/14/6f/2e/146f2e03de9241371f684d129c2b4060.jpg")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}