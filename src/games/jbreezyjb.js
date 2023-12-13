import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const SPEED = 200;
const GRAVITY = 100;
const GROUND = 50

let ball = sprites[0];
ball.image = "🏀"
ball.x = 50
ball.y = 50

let player1 = sprites[1]
player1.image = "⛹️"
player1.x = 400
player1.y = 400

let yspeed = 0;
let held = false;

function touching(a, b) {
    let dx = Math.abs(a.x - b.x);
    let dy = Math.abs(a.y - b.y);
    return dx < 10 && dy < 10;
}

function frame(t, dt) {
    text.title = "Hoops";
    text.score = "Score: 0";


    if (buttons.right)
        player1.x += SPEED * dt;
    if (buttons.left)
        player1.x -= SPEED * dt;
    if (buttons.up)
        player1.y += SPEED * dt;
    if (buttons.down)
        player1.y -= SPEED * dt;

    if (player1.x < 0)
        player1.x = 0;
    if (player1.x > WIDTH)
        player1.x = WIDTH;

    if (player1.y < 50)
        player1.y = 50;

    if (player1.y > HEIGHT)
        player1.y = HEIGHT;

    if (held) {
        ball.x = player1.x - 10;
        ball.y = player1.y;

        if (buttons.space) {
            held = false;
            ball.y -= 50
        }
    } else {
        //if the ball is near the player set held = true
        if (touching(player1, ball))
            held = true;

        if (ball.y < 50)
            ball.y = 50

        if (ball.y > HEIGHT)
            ball.y = HEIGHT


        ball.y += yspeed * dt;
        yspeed = yspeed - GRAVITY * dt;

        if (ball.y <= GROUND) {
            yspeed = yspeed * -0.9;
            ball.y = GROUND;

            yspeed = yspeed + GRAVITY * dt;

            if (ball.x < WIDTH) {
                ball.x += 100 * dt;
                ball.rotation += 200 * dt;
            }
        }

        if (ball.x > 700 && ball.x < 150 && ball.y > 250 && ball.y < 250) {
            ball.x = 50; 
        }
    }
}
let name = "Hoops For FUN";

let background = {
    'background': 'url("https://wallpapers.com/images/hd/basketball-court-pictures-so9uos00f5wbt0m4.jpg")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}

// next step is too give the basketball physics (ie. Gravity). After that figure out the "tractor beam"

// next step is to add code to make it "shoot" whenever we press spacebar, then figure out scoring