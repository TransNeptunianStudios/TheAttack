HUD = function (game, playerInfo, worldInfo) {
	Phaser.Group.call(this, game);

	this.viewPos = {
		x: 120,
		y: 66
	}

	this.playerInfoView = new PlayerInfoView(game, playerInfo, this.viewPos.x, this.viewPos.y);
	this.homeInfoView = new HomeInfoView(game, null, this.viewPos.x, this.viewPos.y);
	this.worldInfoView = new WorldInfoView(game, worldInfo, this.viewPos.x, this.viewPos.y);
	this.settingsView = new SettingsView(game, playerInfo, null, this.viewPos.x, this.viewPos.y);

	game.add.existing(this.playerInfoView);
	game.add.existing(this.homeInfoView);
	game.add.existing(this.worldInfoView);
	game.add.existing(this.settingsView);

	this.createHUD(game);
	this.createHotKeys(game);

	game.input.onDown.add(this.checkClick, this);
	game.onPause.add(this.lostFocus, this);
};

HUD.prototype = Object.create(Phaser.Group.prototype);
HUD.prototype.constructor = HUD;


HUD.prototype.createHUD = function (game) {
	this.playerButton = game.add.button((AttackGame.WIDTH / 2) - 100,
		this.game.height - 45, 'playerSymbol',
		this.toggle, this);
	this.playerButton.view = this.playerInfoView;
	this.add(this.playerButton);

	this.homeButton = game.add.button((AttackGame.WIDTH / 2) - 50,
		this.game.height - 45, 'homeSymbol',
		this.toggle, this);
	this.homeButton.view = this.homeInfoView;
	this.add(this.homeButton);

	this.worldButton = game.add.button((AttackGame.WIDTH / 2),
		this.game.height - 45, 'worldSymbol',
		this.toggle, this);
	this.worldButton.view = this.worldInfoView;
	this.add(this.worldButton);

	this.settingsButton = game.add.button((AttackGame.WIDTH / 2) + 50,
		this.game.height - 45, 'settingsSymbol',
		this.toggle, this);
	this.settingsButton.view = this.settingsView;
	this.add(this.settingsButton);

}

HUD.prototype.lostFocus = function () {
	this.toggle(this.settingsButton);
}

HUD.prototype.checkClick = function (mouse) {
	var x = mouse.x - this.viewPos.x;
	var y = mouse.y - this.viewPos.y;
	if (!this.getLocalBounds().contains(x, y) &&
		!this.playerInfoView.getLocalBounds().contains(x, y) &&
		!this.homeInfoView.getLocalBounds().contains(x, y) &&
		!this.worldInfoView.getLocalBounds().contains(x, y) &&
		!this.settingsView.getLocalBounds().contains(x, y))
		this.deselect();
}
HUD.prototype.deselect = function () {
	// hide all
	this.playerInfoView.hide();
	this.homeInfoView.hide();
	this.worldInfoView.hide();
	this.settingsView.hide();

	this.playerButton.frame = 0;
	this.homeButton.frame = 0;
	this.worldButton.frame = 0;
	this.settingsButton.frame = 0;
}

HUD.prototype.toggle = function (button) {

	var turnOff = false;
	if (button.view.visible)
		turnOff = true;

	this.deselect();

	if (!turnOff) {
		button.view.show();
		button.frame = 1;
	}
}

HUD.prototype.createHotKeys = function (game) {
	// TODO
}

HUD.prototype.update = function () {
	if (this.playerInfoView.visible)
		this.playerInfoView.update();
	else if (this.homeInfoView.visible)
		this.homeInfoView.update();
	else if (this.worldInfoView.visible)
		this.worldInfoView.update();
	else if (this.settingsView.visible)
		this.settingsView.update();
}

HUD.prototype.pauseOn = function () {
	return this.settingsView.pauseOn;
}