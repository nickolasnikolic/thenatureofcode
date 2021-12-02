// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// js port by nickolas nikolic 2021
// this port will depend upon a canvas element id'd as '#canvas' rewrite as you wish.

// Example 1-1: Bouncing Ball, no vectors
let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');

function animate() {
    // Add the current speed to the location.
    x += xspeed;
    y += yspeed;

    if ((x > width) || (x < 0)) {
        xspeed = xspeed * -1;
    }
    if ((y > height) || (y < 0)) {
        yspeed = yspeed * -1;
    }

    // Display circle at x location
    context.beginPath();
    context.arc(240, 160, 20, 0, Math.PI*2, false);
    context.fillStyle = "green";
    context.fill();
    context.closePath();

    requestAnimationFrame(animate);
}
animate();
