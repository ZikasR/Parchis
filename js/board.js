(function () {
	'use strict';

	var WIDTH = 845;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");

	canvas.width = WIDTH;
	canvas.height = WIDTH;
	canvas.style.border = "thick solid #000000";

	ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(0, 0, WIDTH / 3, WIDTH / 3);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(2 * WIDTH / 3, 0, WIDTH / 3, WIDTH / 3);

	ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.fillRect(0, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3);

	ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
    ctx.fillRect(2 * WIDTH / 3, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3);

	ctx.strokeRect(8 * WIDTH / 21, 8 * WIDTH / 21, 5 * WIDTH / 21, 5 * WIDTH / 21);

	ctx.beginPath();
	ctx.moveTo(8 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.lineTo(WIDTH / 2, WIDTH / 2);
	ctx.lineTo(13 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.closePath();
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(8 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.lineTo(WIDTH / 2, WIDTH / 2);
	ctx.lineTo(8 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.closePath();
	ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
	ctx.fill();
	
		ctx.beginPath();
	ctx.moveTo(13 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.lineTo(WIDTH / 2, WIDTH / 2);
	ctx.lineTo(13 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.closePath();
	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fill();
	 
	 		ctx.beginPath();
	ctx.moveTo(13 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.lineTo(WIDTH / 2, WIDTH / 2);
	ctx.lineTo(8 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.closePath();
	ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
	ctx.fill();


	for (var i = 0; i < 7; i++) {
		ctx.strokeRect(WIDTH / 3, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(4 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(5 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
	}

	for (var i = 14; i < 21; i++) {
		ctx.strokeRect(WIDTH / 3, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(4 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(5 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
	}

	for (var i = 0; i < 7; i++) {
		ctx.strokeRect(i * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	}

	for (var i = 14; i < 21; i++) {
		ctx.strokeRect(i * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	}

	document.body.appendChild(canvas);

} ());