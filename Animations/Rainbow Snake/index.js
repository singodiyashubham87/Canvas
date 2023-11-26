const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Circle{
    constructor(x, y, radius, dx, dy){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    draw = ()=>{
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let a = Math.random();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
    }

    update = ()=>{
        if(this.x > (innerWidth-this.radius) || this.x < this.radius){
            this.dx = - this.dx;
        }else if(this.y > (innerHeight-this.radius) || this.y < this.radius){
            this.dy = - this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

let circle = new Circle(25,25,25,2,2);
circle.draw();
setInterval(()=>{
    circle.update();
}, 0.1)
