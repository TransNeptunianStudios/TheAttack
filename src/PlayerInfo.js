PlayerInfo = function (game, worldInfo) {
	this.worldInfo = worldInfo;

	// fill up
	this.gameOver = false;
	this.health = 100.0;

	this.sleepy = 0.0; // 0 is "not sleepy at all"
	this.hunger = 0.0; // 0 is "not hungry at all"
	this.thirst = 0.0; // 0 is "not thirsty at all"

	this.lastUpdated = worldInfo.time;
}

PlayerInfo.prototype.update = function () {
	var dt = Math.abs(this.lastUpdated - this.worldInfo.time);
	var perHour = dt / 1000.0 / 3600.0; // Changes per hour

	this.sleepy += 1.0 * perHour;
	this.hunger += 2.0 * perHour;
	this.thirst += 3.0 * perHour;

	if (this.hunger >= 100.0) this.health -= 1.0 * perHour;
	if (this.thirst >= 100.0) this.health -= 1.0 * perHour;

	this.lastUpdated = new Date(this.worldInfo.time.getTime());
}

PlayerInfo.prototype.isGameOver = function () {
	if (this.health <= 0) this.gameOver = true;

	return this.gameOver;
}

PlayerInfo.prototype.debug = function (clear) {
	if (clear)
		console.clear();

	console.log("Updated: " + this.lastUpdated);
	console.log("Health: " + Math.floor(this.health));
	console.log("Thirst: " + Math.floor(this.thirst));
	console.log("Hunger: " + Math.floor(this.hunger));
	console.log("Sleepy: " + Math.floor(this.sleepy));
}