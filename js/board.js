(function () {
	'use strict';

	var WIDTH = 845;
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

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
	function Step(id, x, y, w, h, fill, home) {

		this.id = id + 1;
		this.x = x || 0;
		this.y = y || 0;
		this.w = w || 0;
		this.h = h || 0;
		this.fill = fill || '#FFFFFF';
		this.home = home || false;
	};

	Step.prototype.draw = function (context) {

		if (this.id === 8) {
			context.beginPath();
			context.moveTo(2 * WIDTH / 3, 2 * WIDTH / 3);
			context.lineTo(5 * WIDTH / 9, 2 * WIDTH / 3);
			context.lineTo(5 * WIDTH / 9, 13 * WIDTH / 21);
			context.lineTo(13 * WIDTH / 21, 13 * WIDTH / 21);
			context.lineTo(2 * WIDTH / 3, 2 * WIDTH / 3);
			context.stroke();
			context.font = "22px serif";
			context.strokeText(this.id, this.x + 5, this.y + 25);
			return;
		} if (this.id === 9) {
			context.beginPath();
			context.moveTo(2 * WIDTH / 3, 2 * WIDTH / 3);
			context.lineTo(13 * WIDTH / 21, 13 * WIDTH / 21);
			context.lineTo(13 * WIDTH / 21, 5 * WIDTH / 9);
			context.lineTo(14 * WIDTH / 21, 5 * WIDTH / 9);
			context.lineTo(2 * WIDTH / 3, 2 * WIDTH / 3);
			context.stroke();
			context.font = "22px serif";
			context.strokeText(this.id, this.x + 5, this.y + 25);
			return;
		}
		if (this.id === 25) {
			context.beginPath();
			context.moveTo(2 * WIDTH / 3, WIDTH / 3);
			context.lineTo(2 * WIDTH / 3, 4 * WIDTH / 9);
			context.lineTo(13 * WIDTH / 21, 4 * WIDTH / 9);
			context.lineTo(13 * WIDTH / 21, 8 * WIDTH / 21);
			context.lineTo(2 * WIDTH / 3, WIDTH / 3);
			context.stroke();
			return;
		}
		if (this.id === 26) {
			context.beginPath();
			context.moveTo(2 * WIDTH / 3, WIDTH / 3);
			context.lineTo(5 * WIDTH / 9, WIDTH / 3);
			context.lineTo(5 * WIDTH / 9, 8 * WIDTH / 21);
			context.lineTo(13 * WIDTH / 21, 8 * WIDTH / 21);
			context.lineTo(2 * WIDTH / 3, WIDTH / 3);
			context.stroke();
			return;
		}

		if (this.id === 42) {
			context.beginPath();
			context.moveTo(WIDTH / 3, WIDTH / 3);
			context.lineTo(4 * WIDTH / 9, WIDTH / 3);
			context.lineTo(4 * WIDTH / 9, 8 * WIDTH / 21);
			context.lineTo(8 * WIDTH / 21, 8 * WIDTH / 21);
			context.lineTo(WIDTH / 3, WIDTH / 3);
			context.stroke();
			return;
		}

		if (this.id === 43) {
			context.beginPath();
			context.moveTo(WIDTH / 3, WIDTH / 3);
			context.lineTo(WIDTH / 3, 4 * WIDTH / 9);
			context.lineTo(8 * WIDTH / 21, 4 * WIDTH / 9);
			context.lineTo(8 * WIDTH / 21, 8 * WIDTH / 21);
			context.lineTo(WIDTH / 3, WIDTH / 3);
			context.stroke();
			return;
		}

		if (this.id === 59) {
			context.beginPath();
			context.moveTo(WIDTH / 3, 2 * WIDTH / 3);
			context.lineTo(WIDTH / 3, 5 * WIDTH / 9);
			context.lineTo(8 * WIDTH / 21, 5 * WIDTH / 9);
			context.lineTo(8 * WIDTH / 21, 13 * WIDTH / 21);
			context.lineTo(WIDTH / 3, 2 * WIDTH / 3);
			context.stroke();
			return;
		}

		if (this.id === 60) {
			context.beginPath();
			context.moveTo(WIDTH / 3, 2 * WIDTH / 3);
			context.lineTo(4 * WIDTH / 9, 2 * WIDTH / 3);
			context.lineTo(4 * WIDTH / 9, 13 * WIDTH / 21);
			context.lineTo(8 * WIDTH / 21, 13 * WIDTH / 21);
			context.lineTo(WIDTH / 3, 2 * WIDTH / 3);
			context.stroke();
			return;
		}

		if (this.home) {
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			context.fillStyle = this.fill;
			context.rect(this.x, this.y, this.w, this.h);
			context.fill();
			context.stroke();
			return;
		}
		context.strokeRect(this.x, this.y, this.w, this.h);
		context.font = "22px serif";
		context.strokeText(this.id, this.x + 5, this.y + 25);
	};
	// ---------------------------------------------------------------
	
	// ---------------------------------------------------------------
	function Target(x1, y1, x2, y2, fill) {

		this.x1 = x1 * WIDTH / 21 || 0;
		this.y1 = y1 * WIDTH / 21 || 0;
		this.x2 = x2 * WIDTH / 21 || 0;
		this.y2 = y2 * WIDTH / 21 || 0;
		this.fill = fill || '#FFFFFF';
	};

	Target.prototype.draw = function (context) {
		context.beginPath();
		context.moveTo(this.x1, this.y1);
		context.lineTo(WIDTH / 2, WIDTH / 2);
		context.lineTo(this.x2, this.y2);
		context.closePath();
		context.fillStyle = this.fill;
		context.fill();
	};
	// ---------------------------------------------------------------

	
	var redBase = new Base(0, 0, WIDTH / 3, WIDTH / 3, "rgb(200,0,0)");
	var blueBase = new Base(2 * WIDTH / 3, 0, WIDTH / 3, WIDTH / 3, "rgba(0, 0, 200, 0.5)");
	var greenBase = new Base(0, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3, "rgba(0, 255, 0, 0.5)");
	var yellowBase = new Base(2 * WIDTH / 3, 2 * WIDTH / 3, WIDTH / 3, WIDTH / 3, "rgba(255, 255, 0, 0.5)");

	redBase.draw(context);
	blueBase.draw(context);
	greenBase.draw(context);
	yellowBase.draw(context);

	var target = new Base(8 * WIDTH / 21, 8 * WIDTH / 21, 5 * WIDTH / 21, 5 * WIDTH / 21);
	target.draw(context);

	var step;

	for (var i = 0; i < 9; i++) {
		step = new Step(i, 5 * WIDTH / 9, (20 - i) * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		step.draw(context);
	}

	for (var i = 0; i < 7; i++) {
		var j = 9;
		step = new Step(j + i, (14 + i) * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		step.draw(context);
	}

	for (var i = 0; i < 9; i++) {
		var j = 17;
		step = new Step(j + i, (20 - i) * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		step.draw(context);
	}

	for (var i = 0; i < 7; i++) {
		var j = 26;
		step = new Step(j + i, 5 * WIDTH / 9, (6 - i) * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		step.draw(context);
	}

	for (var i = 0; i < 9; i++) {
		var j = 34;
		step = new Step(j + i, WIDTH / 3, i * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		step.draw(context);
	}

	for (var i = 0; i < 7; i++) {
		var j = 43;
		step = new Step(j + i, (6 - i) * WIDTH / 21, WIDTH / 3, WIDTH / 21, WIDTH / 9);
		step.draw(context);
	}

	for (var i = 0; i < 9; i++) {
		var j = 51;
		step = new Step(j + i, i * WIDTH / 21, 5 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
		step.draw(context);
	}

	for (var i = 0; i < 7; i++) {
		var j = 60;
		step = new Step(j + i, WIDTH / 3, (14 + i) * WIDTH / 21, WIDTH / 9, WIDTH / 21);
		step.draw(context);
	}

	var target = new Target(8, 8, 13, 8, 'rgb(200,0,0)');
	target.draw(context);
	step = new Step(33, 4 * WIDTH / 9, 0, WIDTH / 9, WIDTH / 21);
	step.draw(context);

	for (var i = 0; i < 7; i++) {
		step = new Step(i, 4 * WIDTH / 9, (i + 1) * WIDTH / 21, WIDTH / 9, WIDTH / 21, 'rgb(200,0,0)', true);
		step.draw(context);
	}

	target = new Target(8, 8, 8, 13, 'rgba(0, 255, 0, 0.5)');
	target.draw(context);
	step = new Step(51, 0, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	step.draw(context);

	for (var i = 0; i < 7; i++) {
		step = new Step(i, (i + 1) * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9, 'rgba(0, 255, 0, 0.5)', true);
		step.draw(context);
	}

	target = new Target(13, 8, 13, 13, 'rgba(0, 0, 200, 0.5)');
	target.draw(context);

	step = new Step(16, 20 * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9);
	step.draw(context);

	for (var i = 0; i < 7; i++) {
		step = new Step(i, (19 - i) * WIDTH / 21, 4 * WIDTH / 9, WIDTH / 21, WIDTH / 9, 'rgba(0, 0, 200, 0.5)', true);
		step.draw(context);
	}

	target = new Target(13, 13, 8, 13, 'rgba(255, 255, 0, 0.5)');
	target.draw(context);

	step = new Step(67, 4 * WIDTH / 9, 20*WIDTH/21, WIDTH / 9, WIDTH / 21);
	step.draw(context);

	for (var i = 0; i < 7; i++) {
		step = new Step(i, 4 * WIDTH / 9, (19 - i) * WIDTH / 21, WIDTH / 9, WIDTH / 21, 'rgba(255, 255, 0, 0.5)', true);
		step.draw(context);
	}

	document.body.appendChild(canvas);




} ());