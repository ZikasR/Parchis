(function () {
	'use strict';

	function Base(x, y, w, h, fill) {

		this.x = x || 0;
		this.y = y || 0;
		this.w = w || 0;
		this.h = h || 0;
		this.fill = fill || 0;
	};

	Base.prototype.draw = function (context) {
		context.fillStyle = this.fill;
		context.fillRect(this.x, this.y, this.w, this.h);
	};

} ());