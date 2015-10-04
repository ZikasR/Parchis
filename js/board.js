(function () {
	'use strict';

	var WIDTH = 845;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");

	canvas.width = WIDTH;
	canvas.height = WIDTH;
	canvas.style.border = "thick solid #000000";
	
	// ---------------------------------------------------------------
	function Base(x, y, w, h, fill) {

		this.x = x || 0;
		this.y = y || 0;
		this.w = w || 0;
		this.h = h || 0;
		this.fill = fill || '#FFFFFF';
	};

	Base.prototype.draw = function (context) {
		context.fillStyle = this.fill;
		context.fillRect(this.x, this.y, this.w, this.h);
	};
	// ---------------------------------------------------------------
	
		// ---------------------------------------------------------------
	function Step(x, y, w, h, fill) {

		this.x = x || 0;
		this.y = y || 0;
		this.w = w || 0;
		this.h = h || 0;
		this.fill = fill || '#FFFFFF';
	};

	Step.prototype.draw = function (context) {
		context.fillStyle = this.fill;
		context.fillRect(this.x, this.y, this.w, this.h);
	};
	// ---------------------------------------------------------------

	
	var redBase = new Base(0, 0, WIDTH / 3, WIDTH / 3, "rgb(200,0,0)");
	var blueBase = new Base(2 * WIDTH / 3, 0, WIDTH / 3, WIDTH / 3, "rgba(0, 0, 200, 0.5)");
	var greenBase = new Base(0, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3, "rgba(0, 255, 0, 0.5)");
	var yellowBase = new Base(2 * WIDTH / 3, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3, "rgba(255, 255, 0, 0.5)");

	redBase.draw(ctx);
	blueBase.draw(ctx);
	greenBase.draw(ctx);
	yellowBase.draw(ctx);

	var target = new Base(8 * WIDTH / 21, 8 * WIDTH / 21, 5 * WIDTH / 21, 5 * WIDTH / 21);
	target.draw(ctx);


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

	ctx.strokeRect(4 * WIDTH / 9, 7 * WIDTH / 21, WIDTH / 9, WIDTH / 21);

	for (var i = 14; i < 21; i++) {
		ctx.strokeRect(WIDTH / 3, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(4 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		ctx.strokeRect(5 * WIDTH / 9, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
	}

	ctx.strokeRect(4 * WIDTH / 9, 13 * WIDTH / 21, WIDTH / 9, WIDTH / 21);

	for (var i = 0; i < 7; i++) {
		ctx.strokeRect(i * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	}

	ctx.strokeRect(7 * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);

	for (var i = 14; i < 21; i++) {
		ctx.strokeRect(i * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		ctx.strokeRect(i * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	}

	ctx.strokeRect(13 * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);

	ctx.beginPath();
	ctx.moveTo(WIDTH / 3, WIDTH / 3);
	ctx.lineTo(8 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(2 * WIDTH / 3, WIDTH / 3);
	ctx.lineTo(13 * WIDTH / 21, 8 * WIDTH / 21);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(WIDTH / 3, 2 * WIDTH / 3);
	ctx.lineTo(8 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(2 * WIDTH / 3, 2 * WIDTH / 3);
	ctx.lineTo(13 * WIDTH / 21, 13 * WIDTH / 21);
	ctx.stroke();

	document.body.appendChild(canvas);




} ());