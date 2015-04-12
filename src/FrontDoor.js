FrontDoor = function (game) {
	Phaser.Sprite.call(this, game, game.width / 2, 248, 'door');
	this.anchor.setTo(0.5, 1);
};

FrontDoor.prototype = Object.create(Phaser.Sprite.prototype);
FrontDoor.prototype.constructor = FrontDoor;