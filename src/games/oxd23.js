import buttons from '../buttons.js';
import sprites from '../sprites.js';
import text from '../text.js';
import { WIDTH, HEIGHT } from '../screen.js';


let SPEED = 200
let triangle = sprites[1];
triangle.image = '🔺';
triangle.x = WIDTH / 2;
triangle.y = HEIGHT / 2;

let Hole = sprites[0];
Hole.image = '🔼';
Hole.x = 200;
Hole.y = 200;

let blacksquarehole = sprites[2];
blacksquarehole.image = '🔲';
blacksquarehole.x = 30;
blacksquarehole.y = 300;

let blacksquare = sprites[3];
blacksquare.image = '⬛'
blacksquare.x = 40
blacksquare.y = 400

let bluecircle = sprites[4];
bluecircle.image = '🔵';
bluecircle.x = 500;
bluecircle.y = 450;

let circleHole = sprites[5];
circleHole.image = '◯';
circleHole.x = 450;
circleHole.y = 400;

let pointinguptriangle = sprites[6];
pointinguptriangle.image = '▲';
pointinguptriangle.x = 340;
pointinguptriangle.y = 50;

let whitepointinguptri = sprites[7];
whitepointinguptri.image = '△';
whitepointinguptri.x = 150;
whitepointinguptri.y = 150;

//Retun true if a and b are touching 
function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x)
    let yDistance = Math.abs(a.y - b.y)
    if (xDistance < 8 && yDistance < 8)
        return true;
    else
        return false;
}

let currentShape = triangle;
let currenthole = Hole;

text.title = "Connect the shapes!";

function frame(t, dt) {
    if (buttons.right)
        currentShape.x += SPEED * dt;
    if (buttons.left)
        currentShape.x -= SPEED * dt;
    if (buttons.up)
        currentShape.y += SPEED * dt;
    if (buttons.down)
        currentShape.y -= SPEED * dt;

    if (currentShape.x < 0)
        currentShape.x = WIDTH;
    if (currentShape.x > WIDTH)
        currentShape.x = 0;
    if (currentShape.y < 0)
        currentShape.y = 0
    if (currentShape.y > HEIGHT)
        currentShape.y = HEIGHT

    if (touching(currentShape, currenthole)) {
        if (currentShape == triangle) {
            currentShape = blacksquare;
            currenthole = blacksquarehole;
        } else if (currentShape == blacksquare) {
            //make it the circle
            currentShape = bluecircle
            currenthole = circleHole
        } else if (currentShape == bluecircle) {
            currentShape = pointinguptriangle
            currenthole = whitepointinguptri
        } else if ( currentShape == pointinguptriangle ){
            text.title = "You Win!"
        }

    }

}

let name = "SHAPE TO HOLE";

let background = {
    'background-color': 'purple',
    'background-size': 'cover'
};

export {
    name,
    background,
    frame
}