import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const SPEED = 300;

let snowboard = sprites[0];
snowboard.image = "🏂";
snowboard.x = WIDTH / 2;
snowboard.y = 140;

let tree = sprites[1];
tree.image = "🌲";
tree.x = WIDTH / 4;
tree.y = HEIGHT / 4;

let rock = sprites[2];
rock.image = "🗿";
rock.x = WIDTH / 8;
rock.y = HEIGHT / 9;

let stick = sprites[3];
stick.image = "🌲";
stick.x = WIDTH / 2;
stick.y = HEIGHT / 2;

function touching(a, b) {
    let dx = Math.abs(a.x - b.x);
    let dy = Math.abs(a.y - b.y);
    if (dx < 10 && dy < 10) {
        return true;
    }
    return false;
}

let score = 0;

function frame(t, dt) {
    text.title = "Snowboarder Summit";
    text.score = "Score: " + score;
    text.color = "white";


    snowboard.x += 200 * dt;
    if (snowboard.x > WIDTH){
        snowboard.x = 0;
        score++;
    }


    if (buttons.right)
        snowboard.x += SPEED * dt;
    if (buttons.left)
        snowboard.x -= SPEED * dt;

    if (snowboard.x < 0)
        snowboard.x = WIDTH;
    if (snowboard.x > WIDTH)
        snowboard.x = 0;

    tree.y += 1;
    if (tree.y > 160) {
        tree.y = 0;
        tree.x = Math.random() * WIDTH;
    }

    rock.y += 1;
    if (rock.y > 160) {
        rock.y = 0;
        rock.x = Math.random() * WIDTH;
    }

    stick.y += 1;
    if (stick.y > 160) {
        stick.y = 0;
        stick.x = Math.random() * WIDTH;
    }

    if (touching(snowboard, tree)) {
        text.title = "Loser!";
        snowboard.image = "💥";
    }
    if (touching(snowboard, stick)) {
        text.title = "Loser!";
        snowboard.image = "💥";
    }
    if (touching(snowboard, rock)) {
        text.title = "Loser!";
        snowboard.image = "💥";
    }

}

let name = "Snowboarder Summit";

let background = {
    'background': 'url("https://static.vecteezy.com/system/resources/previews/013/761/708/non_2x/winter-fores-glade-with-trees-at-night-landscape-with-snow-covered-trees-colorful-illustration-vector.jpg")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
};