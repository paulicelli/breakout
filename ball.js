import Sprite from './sprite.js';

export default class Ball extends Sprite {
    constructor(x, y, radius) {
        super(x, y);
        this.dx = 2;
        this.dy = -2;
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = super.color;
        ctx.fill();
        ctx.closePath();
    }
}
