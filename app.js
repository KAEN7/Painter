// 주요 명칭
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fill = document.getElementsByClassName('fill');
const paint = document.getElementsByClassName('paint');
const save = document.getElementsByClassName('save');

// 중복
canvas.width = 800;
canvas.height = 800;

// ctx
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#2c2c2c';
ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

// let
let painting = false;
let filling = false;

// function
function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


// if
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
}