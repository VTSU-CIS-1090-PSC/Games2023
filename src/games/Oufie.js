import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const ball = sprites[0]; {
    ball.image = "🎅";
    ball.x = 250;
    ball.y = 400;
    ball.y += yVelocity;
}

if (ball.y <= GROUND) {
    yVelocity = yVelocity * -0.9;
    ball.y = GROUND;
    let yVelocity = 0;
}

let presents = [sprites[1]];

for (let present in presents) {
    let sprites = "🎁";
    sprites.x = 10, sprites.y = 250;
    if (buttons.up)
        sprites.y += SPEED * dt;
    if (buttons.down)
        sprites.y -= SPEED * dt;
}



function frame(t, dt) {
    text.title = "Santa Pong";
    text.score = "Score: 0";
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