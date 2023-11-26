const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

for (let i = 0; i < 10; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let r = Math.random() * 50;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.fill();
}

const circleInterval = setInterval(()=>{
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.random() * 50;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let a = Math.random();
    let width = Math.random() * 500;
    let height = Math.random() * 500;
    let rand = Math.random() * 200;
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`

    // if(rand>100){
    //     ctx.fillRect(x,y, width, height);
    // }else{
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fill();
    // }
}, 100)

setTimeout(()=>{
    clearInterval(circleInterval);
}, 20000)





