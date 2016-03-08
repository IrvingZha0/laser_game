'use strict';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = "600";
canvas.height = "600";
var CELL_SIZE = "50";

function drawCircle1(i,j){
    ctx.fillStyle="white";
    var radius = CELL_SIZE/2;
    var x = i*CELL_SIZE + radius;
    var y = j*CELL_SIZE + radius;
    ctx.beginPath();
    ctx.arc(x, y, radius-5, 0, Math.PI*2, true);
    ctx.fill();
}
function drawCircle2(i,j){
    ctx.fillStyle="black";
    var radius = CELL_SIZE/2;
    var x = i*CELL_SIZE + radius;
    var y = j*CELL_SIZE + radius;
    ctx.beginPath();
    ctx.arc(x, y, radius-5, 0, Math.PI*2, true);
    ctx.fill();
}

function drawGrid(){
	//color
	ctx.strokeStyle = 'plum';
	for (var i = 0; i <=(canvas.height/CELL_SIZE); i++) {
	ctx.beginPath();
	ctx.moveTo(0,i*CELL_SIZE);
	ctx.lineTo(canvas.height,i*CELL_SIZE);
	ctx.moveTo(i*CELL_SIZE,0);
	ctx.lineTo(i*CELL_SIZE, canvas.width);
	ctx.stroke();
	};
};

let player = 0;
canvas.addEventListener('click', (e) => {
/*	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);

	let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
​
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);*/

	
	let x = e.layerX;
	let y = e.layerY;

	let i = Math.floor(x/CELL_SIZE);
    let j = Math.floor(y/CELL_SIZE);

	if(player==0){
		drawCircle1(i,j);
		player = 1;
	}
	else if (player ==1) {
		drawCircle2(i,j);
		player = 0;
	};
});
drawGrid();



















/*
let board =[
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,2,1,0,0,0,0,0],
	[0,0,0,0,0,0,2,0,0,0,0,0],
	[0,0,0,0,0,0,0,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,2,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,2],
	[0,0,0,0,0,0,0,0,0,0,0,2],
	[0,0,0,0,0,0,0,0,0,0,0,2],
];
function showCell1(){
	ctx.fillStyle = 'black';
	for (var i = 0; i <=(canvas.height/CELL_SIZE); i++) {
		for (var j = 0; j <=(canvas.height/CELL_SIZE); j++) {
			ctx.beginPath();
			let x1=(1.5*CELL_SIZE)+(i-1)*CELL_SIZE;
			let y1=(1.5*CELL_SIZE)+(j-1)*CELL_SIZE;
			ctx.arc(y1, x1, CELL_SIZE/2, 0, 2 * Math.PI);
			ctx.fill();				
		}
	}
}
function showCell2(){
	ctx.fillStyle = 'red';
	for (var i = 0; i <=(canvas.height/CELL_SIZE); i++) {
		for (var j = 0; j <=(canvas.height/CELL_SIZE); j++) {
			ctx.beginPath();
			let x1=(1.5*CELL_SIZE)+(i-1)*CELL_SIZE;
			let y1=(1.5*CELL_SIZE)+(j-1)*CELL_SIZE;
			ctx.arc(y1, x1, CELL_SIZE/2, 0, 2 * Math.PI);
			ctx.fill();					
		}
	}
}*/



//ctx.strokeStyle -> strokeRect




/*ctx.beginPath();

ctx.moveTo(0,50); // Line
ctx.lineTo(900,50);

ctx.fillRect(0,0,50,50); //zheng fang xing

ctx.arc(75, 75, 50, 0, 2 * Math.PI); // Circle

ctx.stroke();*/


