// 주요 명칭
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const draw = document.getElementById('drawing');
const paint = document.getElementById('paintBtn');
const save = document.getElementsByClassName('save');
const colors = document.getElementsByClassName('color');

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
let drawing = false;

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

function changeColor(event) {
    const lineColor = event.target.style.backgroundColor;
    if(drawing === true) {
        ctx.fillStyle = lineColor;
    } else(painting === true); {
        ctx.strokeStyle = lineColor;
    }
}

function handleCanvasClick() {
    if(drawing) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// if
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
}

Array.from(colors).forEach(anyColor => 
    anyColor.addEventListener('click', changeColor)
);