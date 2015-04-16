WorldInfoView = function (game, world) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.worldInfo = world;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);
};

WorldInfoView.prototype = Object.create(Phaser.Group.prototype);
WorldInfoView.prototype.constructor = WorldInfoView;

WorldInfoView.prototype.show = function () {
	this.visible = true;
	this.game.world.bringToTop(this);
}

WorldInfoView.prototype.hide = function () {
	this.visible = false;
}