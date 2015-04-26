PlayerInfoView = function (game, player, x, y) {
	Phaser.Group.call(this, game);

	this.x = x;
	this.y = y;

	this.game = game;
	this.playerInfo = player;
	this.visible = false;

	var base = this.create(0, 0, 'InfoBack');

	this.healthIndicator = new StatusIndicator(game, 10, 10, 'healthSymbol', 0xFF3300, 100.0);
	this.waterIndicator = new StatusIndicator(game, 10, 50, 'waterSymbol', 0xFFFF0B, 100.0);
	this.foodIndicator = new StatusIndicator(game, 10, 90, 'foodSymbol', 0xFF00FF, 100.0);
	this.sleepIndicator = new StatusIndicator(game, 10, 130, 'sleepSymbol', 0xCCFFFF, 100.0);

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