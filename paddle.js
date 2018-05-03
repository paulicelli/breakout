import Sprite from './sprite.js';

export default class Paddle extends Sprite {
    constructor(x, y, width, height) {
        super(x, y);
        this.speed = 5;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = super.color;
        ctx.fill();
        ctx.closePath();
    }
}
