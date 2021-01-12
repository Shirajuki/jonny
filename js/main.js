const canvas = $('#canvas').get(0);
const ctx = canvas.getContext('2d');
const counter = [0,0];
const gradients = [];
const config = {
	"type": 0,
	"setup": 1,
};
const gameCanvas = new GameBoard(0);
const gameSVG = new GameBoard(1,$('.tictactoe'));
$(document).ready(function() {
	// When the user scrolls down 20px from the top of the document, show the button
	$(document).scroll(function () {
		if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
			$("#scrollUpBtn").addClass('open');
		} else {
			$("#scrollUpBtn").removeClass('open');
		}
	});
	canvas.addEventListener("mousemove", e => {
		const c = canvas.getBoundingClientRect();
		let rx = parseInt(e.clientX - c.left), ry = parseInt(e.clientY - c.top);
		gameCanvas.events(rx,ry);
	}, false);
	$('.documentationBtn').click(() => $('#documentationDiv').addClass('open'));
	$('#close').click(() => $('#documentationDiv').removeClass('open'));
	$("#svg").on('click', () => {
		counter[1]++;
		updateSVG();
	});
	$("#canvas").on('click', e => {
		const c = canvas.getBoundingClientRect();
		let rx = parseInt(e.clientX - c.left), ry = parseInt(e.clientY - c.top);
		counter[0]++;
		config.type = 1;
		gameCanvas.events(rx,ry,true);
	});
	$("#canvas").on('mouseout', () => config.type = 0);
	$("#canvas").on('mouseover', () => config.type = 1);
	$("#canvas").on('mousedown', () => config.type = 2);
	$("#canvas").on('mouseup', () => config.type = 1);
	$('#form').submit(e => e.preventDefault());
	const grd1 = ctx.createLinearGradient(0, 0, 450, 0);
	grd1.addColorStop(0, "aqua");
	grd1.addColorStop(.5, "blue");
	grd1.addColorStop(1, "aqua");
	gradients.push(grd1);
	const grd2 = ctx.createLinearGradient(30, 0, 400, 0);
	grd2.addColorStop(0, "#6a98f0");
	grd2.addColorStop(1, "#c3ccff");
	gradients.push(grd2);
	const grd3 = ctx.createLinearGradient(30, 0, 400, 0);
	grd3.addColorStop(0, "rgba(106,152,240,.5)");
	grd3.addColorStop(1, "rgba(65,81,160,.5)");
	gradients.push(grd3);
	draw();
});
function updateSVG() {
	const children = $("g.clicks").children();
	if (counter[1] > 9) counter[1] = 9;
	for (let i = 0; i < counter[1]; i++) {
		children.eq(i).addClass('visible');
	}
}
function drawCoin() {
	ctx.beginPath();
	ctx.fillStyle = config.type === 0 ? gradients[0] : "white";
	ctx.arc(100,80,80,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(100,80,70,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = config.type !== 1 ? gradients[0] : "white";
	ctx.arc(100,80,60,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(100,120,21,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(140,80,21,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(100,40,21,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(60,80,21,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = config.type === 0 ? gradients[0] : "white";
	ctx.strokeStyle = 'white';
	ctx.lineWidth = 6;
	ctx.rect(60, 40, 80, 80);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.rect(87, 68, 26, 26);
	ctx.fill();
	ctx.closePath();
}
function drawGradientCircle() {
	ctx.beginPath();
	ctx.fillStyle = config.type === 0 ? gradients[0] : "white";
	ctx.arc(320,280,120,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.arc(320,280,80,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = config.type !== 1 ? gradients[0] : "white";
	ctx.arc(320,280,70,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
}
function drawTicTacToe() {
	ctx.beginPath();
	ctx.fillStyle = gradients[2];
	ctx.rect(200, 35, 190, 190);
	ctx.fill();
	ctx.closePath();
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const rect = gameCanvas.rects[j][i];
			ctx.beginPath();
			ctx.fillStyle = rect.color;
			ctx.rect(rect.x,rect.y,50,50);
			ctx.fill();
			ctx.closePath();
			if (rect.visible) {
				const type = gameCanvas.board[j][i];
				if (type === "O") {
					ctx.beginPath();
					ctx.fillStyle = "rgb(11,177,232)";
					ctx.arc(rect.x+25,rect.y+25,25,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
				} else {
					ctx.beginPath();
					ctx.fillStyle =  "#6e54ff";
					ctx.rect(rect.x+5,rect.y+5,40,40);
					ctx.fill();
					ctx.closePath();
				}
			}
		}
	}
}
function draw(type=0) {
	if (canvas) {
		// Shadow rect
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.fillStyle = '#ecf0f9';
		ctx.rect(40, 200, 350, 155);
		ctx.fill();
		ctx.closePath();
		// Polka dots
		for (let i = 1; i <= 4; i++) {
			for (let j = 1; j <= 4; j++) {
				ctx.beginPath();
				ctx.fillStyle = "#bee9e8";
				ctx.arc(100*i-50,100*j-50,25,0,2*Math.PI);
				ctx.fill();
				ctx.closePath();
			}
		}
		// Claws
		for (let i = 0; i < 5; i++) {
			const x = 40*i+350, y = 40*i+20;
			ctx.beginPath();
			ctx.fillStyle = gradients[1];
			ctx.moveTo(x, y);
			ctx.lineTo(x-350, y+255);
			ctx.lineTo(x-50, y+5);
			ctx.fill();
			ctx.closePath();
		}
		drawCoin();
		drawGradientCircle();
		ctx.beginPath();
		ctx.fillStyle = gradients[1];
		ctx.rect(0, 260, 320, 90);
		ctx.fill();
		ctx.closePath();
		// Spawning rectangles
		ctx.beginPath();
		ctx.fillStyle = "rgba(50,50,50,0.5)";
		ctx.rect(10, 230, 280, 80);
		ctx.fill();
		ctx.closePath();
		if (counter[0] > 9) counter[0] = 9;
		for (let i=0; i<counter[0]; i++) {
			ctx.beginPath();
			ctx.fillStyle = gradients[2];
			ctx.rect(40*i+30, 100, 30, 80);
			ctx.fill();
			ctx.closePath();
		}
		drawTicTacToe();
		drawDecryptedMessage();
		requestAnimationFrame(draw);
	}
}
function drawDecryptedMessage() {
	const ox = -20, oy = 250, size = 23;
	const colors = [
		["lime","yellow","blue","red","aqua","magenta"],
		["yellow","blue","aqua","lime","magenta","red"],
		["blue","aqua","magenta","yellow","red","lime"],
		["lime","yellow","blue","red","aqua","magenta"],
		["red","lime","yellow","magenta","blue","aqua"],
		["red","lime","yellow","blue","magenta","aqua"],
	];
	let count = 0;
	for (let loop = 0; loop < 6; loop++) {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 2; j++) {
				ctx.beginPath();
				ctx.fillStyle = colors[loop][count++%6];
				ctx.rect(j*size+size*2*loop+ox+40, i*size+oy, size, size);
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}