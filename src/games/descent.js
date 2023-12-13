import buttons from '../buttons.js';
import { HEIGHT, WIDTH } from '../screen.js';
import sprites from '../sprites.js';
import text from '../text.js';

text
buttons
HEIGHT
WIDTH
let score = 0
let highScore = 0
let name = "Descent Dodge";
let gameRunning = false


let player = sprites[10];
player.image = "";
player.x = WIDTH / 2 + 28
player.flipH = false
player.y = 300

// --Spikes-----------------------------------
const leftSpike = 346
const rightSpike = 460
const spikeStartIndex = 15

let spikePos = [0, -150, -300, -450, -600, -750, -900, -1050, -1200]

let baseSpeed = 100
let spikeSpeed = 0
let speedInc = 11

text.title = "Press Enter to Start"

// -----------------------------------------------

let onRight = true

function frame(t, dt) {
    //text.score = "Score: " + score + " ------------------------------------------------------------------------------ Highest Score:" + highScore;
    text.score = "Score: " + score + " <br> HighScore: " + highScore
    onRight = player.x > WIDTH / 2
    if (buttons.left && onRight && gameRunning && !buttons.right) {
        flip()
    }
    if (buttons.enter && !gameRunning) {
        start();
    }
    if (buttons.right && !onRight && gameRunning && !buttons.left) {
        flip()
    }
    for (let i = 0; i < 10; i++) {
        sprites[i].y += spikeSpeed * dt
        if (sprites[i].y > 500) {
            sprites[i].y = 0
        }
    }
    for (let i = 0; i < 8; i++) {
        sprites[i + spikeStartIndex].y += spikeSpeed * dt
        if (sprites[i + spikeStartIndex].y >= 600) {
            sprites[i + spikeStartIndex].y = -600
            score += 1
            spikeSpeed += speedInc
            if (Math.random() < 0.5) {
                sprites[i + spikeStartIndex].x = leftSpike
            } else {
                sprites[i + spikeStartIndex].x = rightSpike
            }
        }
        if (sprites[i + spikeStartIndex].y < 0 || sprites[i + spikeStartIndex].y > 500 || !gameRunning) {
            sprites[i + spikeStartIndex].image = ""
        } else {
            sprites[i + spikeStartIndex].image = "⚙️"
        }
    }
    for (let i = 0; i < 8; i++) {
        if (touching(player, sprites[i + spikeStartIndex])) {
            gameOver()
        }
    }
}

function start() {
    score = 0
    gameRunning = true
    spikeSpeed = baseSpeed
    for (let i = 0; i < 9; i++) {
        sprites[i + spikeStartIndex].image = "⚙️"
        sprites[i + spikeStartIndex].y = spikePos[i]
        if (Math.random() < 0.5) {
            sprites[i + spikeStartIndex].x = leftSpike
        } else {
            sprites[i + spikeStartIndex].x = rightSpike
        }
    }
    for (let i = 0; i < 10; i++) {
        sprites[i].image = "🔗"
        sprites[i].x = WIDTH / 2
        sprites[i].y = (i + 0.5) * 50
        sprites[i].rotation = -45
    }
    player.image = "🏃‍♂️"
    player.x = WIDTH / 2 + 28
    player.flipH = false
    text.title = ""
}

function gameOver() {
    gameRunning = false
    spikeSpeed = 0
    text.title = " <center> Game Over <br> <br> |Enter to Start| "
    if (score > highScore) {
        highScore = score
    }
    for (let sprite of sprites) {
        sprite.image = ""
    }
}

function touching(a, b) {
    let xDistance = Math.abs(a.x - b.x)
    let yDistance = Math.abs(a.y - b.y)
    return xDistance < 40 && yDistance < 22
}

function flip() {
    player.x = (player.x * -1) + WIDTH
    player.flipH = !player.flipH
}


let background = {
    //'background': 'url("https://th.bing.com/th/id/OIP.EyE_UW95x3T3RgMf7OS4CAHaHa?w=228&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7")',
    'background-color': 'lightgrey',
    'background-size': 'cover',
    "border-right": "290px solid gray",
    "border-left": "290px solid gray"
};

export {
    background,
    frame, name
};

