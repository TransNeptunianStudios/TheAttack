StatusIndicator = function (game, x, y, symbolImage, color, max) {
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;

	this.max = max;

	this.bar = game.add.graphics(29, 10);
	this.bar.beginFill(2, color, 1); // this color is always blue?!
	this.bar.drawRect(0, 0, 88, 10);
	this.bar.endFill();
	this.add(this.bar);

	this.create(0, 0, 'statusIndicator');

	var symbol = this.create(5, 5, symbolImage);
};

StatusIndicator.prototype = Object.create(Phaser.Group.prototype);
StatusIndicator.prototype.constructor = StatusIndicator;


StatusIndicator.prototype.setValue = function (value) {
	this.bar.width = (1.0 - value / this.max) * 88;
};