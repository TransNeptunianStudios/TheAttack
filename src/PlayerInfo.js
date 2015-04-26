PlayerInfo = function () {
	// fill up
	this.gameOver = false;
	this.damage = 70.0;

	this.sleepy = 10.0; // 0 is "not sleepy at all"
	this.hunger = 30.0; // 0 is "not hungry at all"
	this.thirst = 50.0; // 0 is "not thirsty at all"
}

PlayerInfo.prototype.update = function (dt) {
	var perHour = dt / 1000.0 / 3600.0; // Changes per hour

	this.sleepy += 1.0 * perHour;
	this.hunger += 1.5 * perHour;
	this.thirst += 2.8 * perHour;

	if (this.hunger >= 100.0) this.damage += 1.0 * perHour;
	if (this.thirst >= 100.0) this.damage += 2.0 * perHour;

	// keep stuff within bounds
	this.damage = Math.max(Math.min(this.damage, 100), 0);
	this.sleepy = Math.max(Math.min(this.sleepy, 100), 0);
	this.hunger = Math.max(Math.min(this.hunger, 100), 0);
	this.thirst = Math.max(Math.min(this.thirst, 100), 0);

	this.gameOver = this.damage >= 100;
}