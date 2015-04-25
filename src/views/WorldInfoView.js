WorldInfoView = function (game, world) {
	Phaser.Group.call(this, game);
	this.game = game;
	this.worldInfo = world;
	this.visible = false;

	var base = this.create(game.width / 2, game.height - 44, 'InfoBack');
	base.anchor.setTo(0.5, 1);

	var timeSinceAttackStyle = {
		font: "25px Arial",
		fill: "#550044",
		align: "left"
	};
	this.timeSinceAttack = this.game.add.text(this.game.world.centerX / 2, 100, "", timeSinceAttackStyle);
	this.add(this.timeSinceAttack);
};

WorldInfoView.prototype = Object.create(Phaser.Group.prototype);
WorldInfoView.prototype.constructor = WorldInfoView;

WorldInfoView.prototype.show = function () {
	this.visible = true;
}

WorldInfoView.prototype.hide = function () {
	this.visible = false;
}

WorldInfoView.prototype.update = function () {
	this.timeSinceAttack.text = "Time since attack\n" + this.getSurivalTimeString();
}

WorldInfoView.prototype.getSurivalTimeString = function () {
	var time = new Date(Math.abs(this.worldInfo.time - this.worldInfo.attackStart));

	var days = Math.floor(time.getTime() / 1000 / 60 / 60 / 24);
	var hours = Math.floor(time.getTime() / 1000 / 60 / 60) % 24;
	var min = Math.floor(time.getTime() / 1000 / 60) % 60;
	var sec = Math.floor(time.getTime() / 1000) % 60;

	line = "";
	if (days > 0) line += days + " day(s) "
	if (hours > 0) line += hours + " hour(s) "
	if (min > 0) line += min + " min ";
	//if (sec > 0) line += sec + " sec ";

	return line;
}