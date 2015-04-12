PauseMenu = function (game) {
	Phaser.Group.call(this, game);

	var base = this.create(game.width / 2, game.height / 2, 'pauseBack');
	base.anchor.setTo(0.5);
	base.alpha = 0.8;

};

PauseMenu.prototype = Object.create(Phaser.Group.prototype);
PauseMenu.prototype.constructor = PauseMenu;

PauseMenu.prototype.show = function (playerInfo, worldInfo) {
	this.visible = true;

	playerInfo.debug(true);
}

PauseMenu.prototype.hide = function () {
	this.visible = false;
}