import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';

const playerSpeed = 200

function frame(t, dt) {
    text.title = "";
    text.score = "Score: 0";


    if (buttons.up)
        trackStar.y += playerSpeed * dt
    if (buttons.right){
        trackStar.x += playerSpeed * dt
        trackStar.flipH = true;
    }
    if (buttons.left){
        trackStar.x -= playerSpeed * dt
        trackStar.flipH = false;
    }
}


let trackStar = sprites[0]
trackStar.image = "🏃";
trackStar.x = 100
trackStar.y = 170
trackStar.flipH = true;


let name = "Track Star";

let background = {
    'background': 'url("https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-poster-of-track-and-field-race-in-campus-games-image_925132.jpg")',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}





function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x);
    let yDistance = Math.abs(a.y - b.y);
    if (xDistance < 10 && yDistance < 10)
        return true;
    else
        return false;
}
