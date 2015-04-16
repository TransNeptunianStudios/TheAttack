SettingsView = function (game, player, world) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.playerInfo = player;
	this.worldInfo = world;
	this.pauseOn = false;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);

	this.saveButton = game.add.button(AttackGame.WIDTH / 2,
		AttackGame.HEIGHT - 100,
		'saveButton',
		this.saveGame,
		this, 1, 0, 2);
	this.saveButton.anchor.setTo(0.5);
	this.add(this.saveButton);
};

SettingsView.prototype = Object.create(Phaser.Group.prototype);
SettingsView.prototype.constructor = SettingsView;

SettingsView.prototype.show = function () {
	this.pauseOn = true;
	this.visible = true;
	this.saveButton.visible = true;
	this.game.world.bringToTop(this);
}
SettingsView.prototype.hide = function () {
	this.pauseOn = false;
	this.visible = false;
}
SettingsView.prototype.saveGame = function () {
	localStorage["PlayerSave"] = JSON.stringify(this.playerInfo);
	localStorage["WorldSave"] = JSON.stringify(this.worldInfo);
	this.saveButton.visible = false;
}