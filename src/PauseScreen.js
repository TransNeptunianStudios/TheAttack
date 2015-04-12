PauseScreen = function (game) {
	Phaser.Group.call(this, game);

	var base = this.create(50, 50, 'pauseBack');
	base.alpha = 0.9;

};

PauseScreen.prototype = Object.create(Phaser.Group.prototype);
PauseScreen.prototype.constructor = PauseScreen;

PauseScreen.prototype.show = function (playerInfo, worldInfo) {
	this.visible = true;

	playerInfo.debug(true);
}

PauseScreen.prototype.hide = function () {
	this.visible = false;
}