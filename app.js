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
let drawing = false;
let painting = false;

// function
function stopDrawing() {
    drawing = false;
}

function startDrawing() {
    drawing = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!drawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function changeColor(event) {
    const lineColor = event.target.style.backgroundColor;
    ctx.strokeStyle = lineColor;
}

function handleCanvasClick() {
    if(drawing) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function changeCanvasColor(event) {
    const canvasColor = event.target.style.backgroundColor;
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// if
if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('click', handleCanvasClick);
}

Array.from(colors).forEach(anyColor => 
    anyColor.addEventListener('click', changeColor)
);

Array.from(colors).forEach(anyColor => 
    anyColor.addEventListener('click', changeCanvasColor)
);

if(draw) {
    draw.addEventListener('click', );
}

if(paint) {
    paint.addEventListener('click', changeCanvasColor);
}
