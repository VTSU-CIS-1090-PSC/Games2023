const SPRITE_COUNT = 30;

let screen = document.querySelector('#screen');

let sprites = [];
for (let i = 0; i < SPRITE_COUNT; i++) {
    let sprite = {
        image: "",
        x: 0, y: 0,
        flipH: false,
        flipV: false,
        rotation: 0
    };
    let div = document.createElement('div');
    div.className = 'sprite';
    sprite._div = div;
    screen.appendChild(div);
    sprites.push(sprite);
}

function updateSprites() {
    for (let sprite of sprites) {
        let div = sprite._div;
        div.innerText = sprite.image;
        div.style.color = sprite.color;
        div.style.left = (sprite.x - div.clientWidth / 2 ) + "px";
        div.style.bottom = ( sprite.y - div.clientHeight / 2) + "px";
        div.style.transform = `rotate(${sprite.rotation}deg) scale(${sprite.flipH ? -1 : 1},${sprite.flipV ? -1 : 1})`;
    }
}

export default sprites;
export {
    sprites,
    updateSprites
};