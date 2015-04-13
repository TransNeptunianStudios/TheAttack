PauseMenu = function (game, player, world) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.playerInfo = player;
	this.worldInfo = world;

	game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(
		this.togglePause, this);

	this.pauseOn = false;

	var base = this.create(game.width / 2, game.height / 2, 'pauseBack');
	base.anchor.setTo(0.5);
	base.alpha = 0.8;

	var saveButton = game.add.button(AttackGame.WIDTH / 2,
		AttackGame.HEIGHT - 100,
		'saveButton',
		this.saveGame,
		this, 1, 0, 2);
	saveButton.anchor.setTo(0.5);
	this.add(saveButton);

};

PauseMenu.prototype = Object.create(Phaser.Group.prototype);
PauseMenu.prototype.constructor = PauseMenu;

PauseMenu.prototype.togglePause = function () {
	this.pauseOn = !this.pauseOn;
	if (this.pauseOn) {
		this.visible = true;
		this.game.world.bringToTop(this);
	} else
		this.visible = false;
}

PauseMenu.prototype.saveGame = function () {
	localStorage["PlayerSave"] = JSON.stringify(this.playerInfo);
	localStorage["WorldSave"] = JSON.stringify(this.worldInfo);

	this.togglePause();
}