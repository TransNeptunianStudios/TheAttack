SettingsView = function (game, player, world, x, y) {
	Phaser.Group.call(this, game);
	this.x = x;
	this.y = y;

	this.game = game;
	this.playerInfo = player;
	this.worldInfo = world;
	this.pauseOn = false;
	this.visible = false;

	var base = this.create(0, 0, 'InfoBack');

	this.saveButton = game.add.button(10, 10,
		'saveButton',
		this.saveGame,
		this, 1, 0, 2);
	this.add(this.saveButton);
};

SettingsView.prototype = Object.create(Phaser.Group.prototype);
SettingsView.prototype.constructor = SettingsView;

SettingsView.prototype.show = function () {
	this.pauseOn = true;
	this.visible = true;
	this.saveButton.visible = true;
	//this.game.world.bringToTop(this);
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