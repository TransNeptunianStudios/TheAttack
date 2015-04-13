Clock = function (game, time) {
	Phaser.Group.call(this, game);
	var pos = [this.game.width / 2, 45];

	var base = this.create(pos[0], pos[1], 'clock');
	base.anchor.setTo(0.5);

	this.minuteHand = this.create(pos[0], pos[1], 'clock_m');
	this.minuteHand.anchor.setTo(0.5);

	this.hourHand = this.create(pos[0], pos[1], 'clock_h');
	this.hourHand.anchor.setTo(0.5);

	this.setTime(time);
}

Clock.prototype = Object.create(Phaser.Group.prototype);
Clock.prototype.constructor = Clock;

Clock.prototype.setTime = function (time) {
	var second = parseFloat(time.getSeconds() % 60) / 60.0;

	var minute = parseFloat(time.getMinutes() + second % 60) / 60.0;
	this.minuteHand.angle = minute * 360;

	var hour = parseFloat(time.getHours() + minute % 12.0) / 12.0;
	this.hourHand.angle = hour * 360;

}