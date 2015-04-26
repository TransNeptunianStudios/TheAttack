Home = function (game, homeInfo, time) {
	Phaser.Group.call(this, game);

	this.create(0, 0, 'emptyRoom');
	this.frontDoor = new FrontDoor(this.game);
	this.add(this.frontDoor);

	// Clock
	this.clock = new Clock(this.game, time);
	this.add(this.clock);
};

Home.prototype = Object.create(Phaser.Group.prototype);
Home.prototype.constructor = Home;

Home.prototype.update = function (dt) {
	this.clock.update();
}