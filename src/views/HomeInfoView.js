HomeInfoView = function (game, home) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.homeInfo = home;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);
};

HomeInfoView.prototype = Object.create(Phaser.Group.prototype);
HomeInfoView.prototype.constructor = HomeInfoView;

HomeInfoView.prototype.show = function () {
	this.visible = true;
	this.game.world.bringToTop(this);
}

HomeInfoView.prototype.hide = function () {
	this.visible = false;
}