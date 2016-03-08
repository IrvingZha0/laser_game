'use strict';

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let x = 10;
let y = 20;
let direction = "right";

canvas.width = "1300";
canvas.height = "700";

let img = new Image();
img.src = "pic/ship.png";

img.onload = function(){
	onFrame();
}

let imgLaser = new Image();
	imgLaser.src = "pic/laser.png";
	imgLaser.onload = function(){
}

let speed = 10;
function onFrame (){
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(img,x,y);
	for (let i = 0; i < laserArray.length; i++) { 
		laserArray[i].y -= speed;
	}
	drawLaser();
	requestAnimationFrame(onFrame);
}

canvas.addEventListener("mousemove",(e)=>{
	x = e.layerX - img.width/2;
	y = e.layerY - img.height/2;
});

let lx = -100;
let ly = -100;
let laserArray = [];

function drawLaser (){
	for (let i = 0; i < laserArray.length; i++) {
		ctx.drawImage(imgLaser, laserArray[i].x, laserArray[i].y);
	}
}

let id = 0;
canvas.addEventListener("click", (e) => {
	lx = e.layerX;
	ly = e.layerY - img.height/2;
	createObj(lx,ly,id);
	id ++;
});

function createObj(lx, ly, id){
	let laserObj = {};
	laserObj.id = id;
	laserArray.push(laserObj);
	laserArray[id].x = lx;
	laserArray[id].y = ly;
	console.log(laserArray);
}

function filterLaserArray(){
	for (let i = 0; i < laserArray.length; i++) {
		if (laserArray[i].y<=0) {
			laserArray.splice(i,1);
		}
	}
}
/*'use strict';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = "600";
canvas.height = "600";
let img1 = new Image();
img1.src = 'pic/ship.png'
let img2 = new Image();
img2.src = 'pic/laser.png'
let img3 = new Image();
img2.src = 'pic/laser1.png'
let img4 = new Image();
img2.src = 'pic/laser2.png'

let x = 100;
let y = 40;
let m = 0;
let n = 0;
/*var direction = "right";

function onFrame () {
	// body...
	ctx.fillStyle = "darkgray";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(img1, x, y);
	requestAnimationFrame(onFrame);
}
canvas.addEventListener('mousemove', (e) => {	
	x = e.layerX - img1.width/2+4;
	y = e.layerY - img1.height/2;
});

function shoot(){
	n-=1;
	ctx.drawImage(img2, m, n);
	requestAnimationFrame(shoot);
	console.log(n);
}

canvas.addEventListener('click', (e) => {	
	m = e.layerX;
	n = e.layerY - img1.height;
	shoot();
});
onFrame();*/

/* -------------------------little spice move

	if (direction == "right") {
		if (x < canvas.width) {
			x+=4;
			ctx.fillStyle = "black";
			ctx.fillRect(x,y,25,25);
		}else{
			direction = "left";
		}
	}else{
		if (x > 0 ) {
			x-=4;
			ctx.fillStyle = "black";
			ctx.fillRect(x,y,25,25);			
		}
		else{
			direction = "right";
		}
	};
*/
