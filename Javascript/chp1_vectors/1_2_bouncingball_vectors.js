// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// js port by nickolas nikolic 2021
// this port will depend upon a canvas element id'd as '#canvas' rewrite as you wish.

// Example 1-2: Bouncing Ball, with vectors
class Vector{
    constructor(x,y, xspeed, yspeed){
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    magnitude(){
        // Add the current speed to the location.
        this.x += this.xspeed;
        this.y += this.yspeed;

        if ((this.x > window.innerWidth) || (this.x < 0)) {
            this.xspeed = -this.xspeed;
        }
        if ((y > height) || (y < 0)) {
            this.yspeed = -this.yspeed;
        }
        return this;
    }

    make(typeOfGraphic, context){
        switch (typeOfGraphic) {
            case 'c' || 'circle':
                context.moveTo(this.x, this.y);
                context.beginPath();
                context.arc(240, 160, 20, 0, Math.PI*2, false);
                context.fillStyle = "red";
                context.fill();
                context.closePath();
                break;
        
            default:
                console.log('not implemented make type');
                break;
        }
    }
}
const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

const context = canvas.getContext('2d');

const v = new Vector(100, 100, 2.5, 2.0)

function animate() {
    // Display circle at x location
    v.magnitude();
    v.make('circle', context);

    requestAnimationFrame(animate);
}
animate();
