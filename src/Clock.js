Clock = function (game, time) {
	Phaser.Group.call(this, game);
	var pos = [this.game.width / 2, 45];

	var base = this.create(pos[0], pos[1], 'clock');
	base.anchor.setTo(0.5);

	this.hourHand = this.create(pos[0], pos[1], 'clock_h');
	this.hourHand.anchor.setTo(0.5);
	var hour = parseFloat(time.getHours() % 12) / 12.0;
	this.hourHand.angle = hour * 360;

	this.minuteHand = this.create(pos[0], pos[1], 'clock_m');
	this.minuteHand.anchor.setTo(0.5);
	var minute = parseFloat(time.getMinutes() % 60) / 60.0;
	this.minuteHand.angle = minute * 360;
}

Clock.prototype = Object.create(Phaser.Group.prototype);
Clock.prototype.constructor = Clock;

Clock.prototype.setTime = function (time) {
	var hour = parseFloat(time.getHours() % 12) / 12.0;
	this.hourHand.angle = hour * 360; // 7 in the morning

	var minute = parseFloat(time.getMinutes() % 60) / 60.0;
	this.minuteHand.angle = minute * 360;
}