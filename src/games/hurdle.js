import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

let hurdles = [sprites[0], sprites[1], sprites[2]];
for (let hurdle of hurdles) {
    hurdle.image = "🚧";
    //hurdle.x = WIDTH / 2;
    hurdle.y = HEIGHT / 2
}
hurdles[0].x = 150;
hurdles[1].x = 400;
hurdles[2].x = 650;

const SPEED = 200;
let runner = sprites[3];
runner.image = "🏃🏾";
runner.x = 800;
runner.y = HEIGHT / 2;


let yVelocity = 0;
let score = 0;


function frame(t, dt) {
    text.score = "Score:" + score;

    if (buttons.right)
        runner.x += SPEED * dt;
    if (buttons.left)
        runner.x -= SPEED * dt;

    runner.y += yVelocity * dt;

    for (let hurdle of hurdles) {
        if (runner.x < hurdle.x + 1 && runner.x > hurdle.x - 1 && runner.y < hurdle.y + 5) {
            runner.x = 800;
        }
        if (runner.x < hurdle.x + 1 && runner.x > hurdle.x - 1 && runner.y > hurdle.y + 5) {
            score += 100
        }
    }
    if (buttons.space && runner.y <= HEIGHT / 2)
        yVelocity = 200;

    if (runner.y > HEIGHT / 2)
        yVelocity -= 200 * dt;
    else if (yVelocity < 0)
        yVelocity = 0;

    if (runner.x < 0)
        runner.x = WIDTH;
    if (runner.x > WIDTH)
        runner.x = 0;
}


let name = "Hurdle man";

let background = {
    'background-color': 'green',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}