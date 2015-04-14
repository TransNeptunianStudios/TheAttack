HUD = function (game, settingsView) {
	Phaser.Group.call(this, game);
	this.settingsView = settingsView;

	this.currentMenu = null;

	this.createUpperRightHUD(game);
	this.createMainHUD(game);
};

HUD.prototype = Object.create(Phaser.Group.prototype);
HUD.prototype.constructor = HUD;

HUD.prototype.createUpperRightHUD = function (game) {
	var graphics = this.game.add.graphics(0, 0);
	graphics.lineStyle(2, 0x000000, 1);
	graphics.beginFill(0xAAAAAA, 1);
	graphics.drawRoundedRect(
		this.game.width - 50, -10, 70, 60, 10);
	graphics.endFill();
	this.add(graphics);

	var settingsButton = game.add.button(AttackGame.WIDTH - 45,
		5,
		'settingsSymbol',
		this.toggleSettings,
		this, 0, 0, 0);
	this.add(settingsButton);

	game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(
		this.toggleSettings, this);
};

HUD.prototype.createMainHUD = function (game) {
	var graphics = this.game.add.graphics(0, 0);
	graphics.lineStyle(2, 0x000000, 1);
	graphics.beginFill(0xAAAAAA, 1);
	graphics.drawRoundedRect(
		(this.game.width / 2) - 100, this.game.height - 50, 200, 60, 10);
	graphics.endFill();
	this.add(graphics);

	var playerButton = game.add.button((AttackGame.WIDTH / 2) - 90,
		this.game.height - 45,
		'playerSymbol',
		this.toggleSettings,
		this, 0, 0, 0);
	this.add(playerButton);

	var homeButton = game.add.button((AttackGame.WIDTH / 2) - 20,
		this.game.height - 45,
		'homeSymbol',
		this.toggleSettings,
		this, 0, 0, 0);
	this.add(homeButton);

	var worldButton = game.add.button((AttackGame.WIDTH / 2) + 50,
		this.game.height - 45,
		'worldSymbol',
		this.toggleSettings,
		this, 0, 0, 0);
	this.add(worldButton);

};

HUD.prototype.toggleSettings = function () {
	if (this.currentMenu == this.settingsView) {
		this.settingsView.hide();
		this.currentMenu = null;
	} else {
		this.settingsView.show();
		this.currentMenu = this.settingsView;
	}
}

HUD.prototype.showPlayerInfo = function () {

}

HUD.prototype.showHomeInfo = function () {

}

HUD.prototype.showWorldInfo = function () {

}