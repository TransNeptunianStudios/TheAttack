PauseScreen = function (game) {
	Phaser.Group.call(this, game);

	var base = this.create(50, 50, 'pauseBack');
	base.alpha = 0.9;

	this.visible = false;
};

PauseScreen.prototype = Object.create(Phaser.Group.prototype);
PauseScreen.prototype.constructor = PauseScreen;