import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const LOCK_SPEED = 300;

let lock = sprites[0];
lock.image = "🔑"
lock.x = 400;
lock.y = 250;

let key = sprites[1];
key.image = "🔒"
key.x = 100;
key.y = 400;

let key2 = sprites[2];
key2.image = "🔒"
key2.x = 750;
key2.y = 100;

let key3 = sprites[3];
key3.image = "🔒"
key3.x = 300;
key3.y = 75;

let key4 = sprites[4];
key4.image = "🔒"
key4.x = 500;
key4.y = 450;

let key5 = sprites[5];
key5.image = "🔒"
key5.x = 700;
key5.y = 350;

let key6 = sprites[6];
key6.image = "🔒"
key6.x = 165;
key6.y = 250;

let key7 = sprites[7];
key7.image = "🔒"
key7.x = 50;
key7.y = 50;

let key8 = sprites[8];
key8.image = "🔒"
key8.x = 300;
key8.y = 315;

let key9 = sprites[9];
key9.image = "🔒"
key9.x = 600;
key9.y = 200;

const myKeys = [sprites[1], sprites[2], sprites[3], sprites[4], sprites[5],
sprites[6], sprites[7], sprites[8], sprites[9]]

let yVelocity = 0;
let xVelocity = 0;


function frame(t, dt) {
    if (buttons.right) {
        xVelocity = LOCK_SPEED;
    } else if (buttons.left) {
        xVelocity = -LOCK_SPEED;
    } else {
        xVelocity = 0;
    }

    if (buttons.up) {
        yVelocity = LOCK_SPEED;
    } else if (buttons.down) {
        yVelocity = -LOCK_SPEED;
    } else {
        yVelocity = 0;
    }

    lock.x += xVelocity * dt;
    lock.y += yVelocity * dt;

    for (let key of myKeys) {
        if (touching(key, lock)) {
            key.image = "🔓";
        }
    }


    if (lock.x < 0)
        lock.x = 0;
    if (lock.x > WIDTH)
        lock.x = WIDTH;

}
function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 50 && yDistance < 50)
        return true;
    else
        return false;
}


let name = "Key Collector";

let background = {
    'background-color': 'purple',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}

