import Sprite from './sprite.js';

export default class Brick extends Sprite {
    constructor() {
        super(0, 0);
        this.rows = 3;
        this.columns = 5;
        this.offset = 24;
        this.margin = 20;
    }

    get bricks() {
        let bricksArray =  []; // Array(this.columns * this.rows).fill({ x: 0, y: 0 });
        for (let index = 0; index < (this.columns * this.rows); index++) {
            bricksArray[index] = {  x: ((index % this.columns) * (50 + this.margin)) + this.offset,
                                    y: (Math.floor(index / this.columns) * (20 + this.margin)) + this.offset,
                                    w: 50,
                                    h: 20 };
        }
        return bricksArray;
    }

    // get bricks() {
    //     let bricksArray =  Array(this.columns * this.rows).fill({ x: 0, y: 0, w: 50, h: 20 });
    //     for (let index = 0; index < (this.columns * this.rows); index++) {
    //         bricksArray[index].x = ((index % this.columns) * (50 + this.margin)) + this.offset;
    //         bricksArray[index].y = (Math.floor(index / this.columns) * (20 + this.margin)) + this.offset;
    //     }
    //     return bricksArray;
    // }

    draw(ctx) {
        for (let brick of this.bricks) {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
