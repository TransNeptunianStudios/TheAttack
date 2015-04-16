PlayerInfoView = function (game, player) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.playerInfo = player;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);
};

PlayerInfoView.prototype = Object.create(Phaser.Group.prototype);
PlayerInfoView.prototype.constructor = PlayerInfoView;

PlayerInfoView.prototype.show = function () {
	this.visible = true;
	this.game.world.bringToTop(this);
}

PlayerInfoView.prototype.hide = function () {
	this.visible = false;
}