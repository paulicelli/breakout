// test javascript
"use strict";

import Ball from './ball.js';
import Paddle from './paddle.js';
import Brick from './bricks.js';

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const ball = new Ball(canvas.width / 2, canvas.height - 30, 10);
const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 75, 10);
const bricks = new Brick();

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 8);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx);
    paddle.draw(ctx);
    bricks.draw(ctx);

    ball.x += ball.dx;
    ball.y += ball.dy;
    boundsCheck();

    for (let brick of bricks.bricks) {
        if ((ball.x > brick.x && ball.x < (brick.x + brick.w)) && (ball.y > brick.y && ball.y < (brick.y + brick.h))) {
            ball.dy = -ball.dy;
        }
    }

    if (rightPressed && paddle.x < canvas.width - paddle.width) {
        paddle.x += paddle.speed;
    } else if (leftPressed && paddle.x > 0) {
        paddle.x -= paddle.speed;
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function boundsCheck() {
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy
    } else if (ball.y > canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy = -ball.dy;
        } else {
            alert("GAME OVER");
            document.location.reload();
        }
    }

    if (ball.x > canvas.width-ball.radius || ball.x < ball.radius) {
        ball.dx = -ball.dx
    }
}

