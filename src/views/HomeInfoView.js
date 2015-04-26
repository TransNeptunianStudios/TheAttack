HomeInfoView = function (game, home, x, y) {
	Phaser.Group.call(this, game);

	this.x = x;
	this.y = y;

	this.game = game;
	this.homeInfo = home;
	this.visible = false;

	var base = this.create(0, 0, 'InfoBack');
};

HomeInfoView.prototype = Object.create(Phaser.Group.prototype);
HomeInfoView.prototype.constructor = HomeInfoView;

HomeInfoView.prototype.show = function () {
	this.visible = true;
}

HomeInfoView.prototype.hide = function () {
	this.visible = false;
}