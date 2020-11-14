// 주요 명칭
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fill = document.getElementsByClassName('fill');
const paint = document.getElementsByClassName('paint');
const save = document.getElementsByClassName('save');

// ctx
ctx.fillRect(0,0,800,800);
ctx.fillStyle = 'white';
ctx.strokeStyle = '2c2c2c';
ctx.lineWidth = 2.5;