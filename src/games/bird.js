import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

let gravity = 0.5;
let yVelocity = 0;
text.title = "Bird Game";
function frame(t, dt) {
    let frame = 0;
    text.score = "Score: " + score;
    yVelocity = yVelocity + gravity
    bird.y = bird.y - yVelocity;
    //stops bird at ground
    if (bird.y < 26) {
        bird.y = 26
        text.title = "Game Over"
        text.color = "red"
        gameOver();
    }
    if (bird.y > 485) {
        bird.y = 485;
        yVelocity = 0;
        text.title = "Game Over"
        text.color = "red"
        gameOver();
    }
    if (buttons.up)
        birdMovement()

    if (buttons.space) {
        fireballbottom.y = bird.y
        fireballbottom.x = bird.x - 70
    }
    fireballbottom.x = fireballbottom.x + 50;
    if (fireballbottom.x > 840) {
        fireballbottom.x = 840;
    }
    eagle.x = eagle.x - speed;

    if (touching(fireballbottom, eagle) == true && fireballbottom.x < 800) {
        eagle.x = 1000
        score++
        speed = speed * 1.1
    }

    if (touching(fireballbottom, pheonix) == true && pheonix.x < 800) {
        pheonix.x = 1000
        score++
        phxspeed = phxspeed * 1.1;
    }
    if (score >= 5)
        pheonix.x = pheonix.x - phxspeed;

    if (eagle.x <= 0) {
        eagle.x = 1000;
        eagle.y = Math.random() * 500;
        speed = speed * 1.1
        phxspeed = phxspeed * 1.15 //change to 1.1 once game over function is done
        score++
    }
    if (pheonix.x < 0) {
        pheonix.x = 1000;
        pheonix.y = Math.random() * 500;
        score++
    }

    if (touching(eagle, bird) == true) {
        text.title = "Game Over"
        text.color = "red"
        gameOver();
    }
    if (touching(pheonix, bird) == true) {
        text.title = "Game Over"
        text.color = "red"
        gameOver();
    }

    if (score >= 20) {
        text.title = "You Win!"
        text.color = "green"
        gameOver();
    }
    if (t < 1) {
        bird.y = 450;
        yVelocity = 0;
        eagle.x = 1000;
        pheonix.x = 1000;
    }
}


//returns true if sprites a and b are touching
function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x)
    let yDistance = Math.abs(a.y - b.y)
    if (xDistance < 25 && yDistance < 25)
        return true;
    else
        return false;
}

function gameOver() {
    speed = 0;
    phxspeed = 0;
    gravity = 0;
    yVelocity = 0;
    if (buttons.up) {
        return false;
    }
}
let bird = sprites[0];
bird.image = "🐥";
bird.x = WIDTH / 4;
bird.y = 480;

let eagle = sprites[1];
eagle.image = "🦅";
eagle.x = 900;
eagle.y = Math.random() * 500;

let pheonix = sprites[2];
pheonix.image = "🐦";
pheonix.x = 900;
pheonix.y = Math.random() * 500;

let fireballbottom = sprites[3]
fireballbottom.image = "🔥"
fireballbottom.x = 900
fireballbottom.y = 25

let fireballtop = sprites[4]
fireballtop.image = "🔥"
fireballtop.x = 900
fireballtop.y = 480

let speed = Math.random() * 10;
let phxspeed = Math.random() * 10;

function birdMovement() {
    yVelocity = 0;
    yVelocity = yVelocity - 7;
}



let score = 0;
let name = "My Game";

let background = {

    'background': 'url("https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=0%2C292%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}