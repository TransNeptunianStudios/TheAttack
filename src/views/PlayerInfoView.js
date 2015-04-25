PlayerInfoView = function (game, player) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.playerInfo = player;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);

	this.healthIndicator = new StatusIndicator(game, 130, 80, 'healthSymbol', 0xFF3300, 100.0);
	this.waterIndicator = new StatusIndicator(game, 130, 120, 'waterSymbol', 0xFFFF0B, 100.0);
	this.foodIndicator = new StatusIndicator(game, 130, 160, 'foodSymbol', 0xFF00FF, 100.0);
	this.sleepIndicator = new StatusIndicator(game, 130, 200, 'sleepSymbol', 0xCCFFFF, 100.0);

	this.add(this.healthIndicator);
	this.add(this.waterIndicator);
	this.add(this.foodIndicator);
	this.add(this.sleepIndicator);
};

PlayerInfoView.prototype = Object.create(Phaser.Group.prototype);
PlayerInfoView.prototype.constructor = PlayerInfoView;

PlayerInfoView.prototype.show = function () {
	this.visible = true;
}

PlayerInfoView.prototype.hide = function () {
	this.visible = false;
}

PlayerInfoView.prototype.update = function () {
	this.healthIndicator.setValue(this.playerInfo.damage);
	this.waterIndicator.setValue(this.playerInfo.thirst);
	this.foodIndicator.setValue(this.playerInfo.hunger);
	this.sleepIndicator.setValue(this.playerInfo.sleepy);
}