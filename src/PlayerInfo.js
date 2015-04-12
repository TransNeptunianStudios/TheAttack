PlayerInfo = function (game, worldInfo) {
	this.worldInfo = worldInfo;

	// fill up
	this.gameOver = false;
	this.health = 10.0;

	this.sleepy = 20.0; // 0 is "not sleepy at all"
	this.hunger = 30.0; // 0 is "not hungry at all"
	this.thirst = 30.0; // 0 is "not thirsty at all"

	this.lastUpdated = worldInfo.time;
}

PlayerInfo.prototype.update = function () {
	var dt = Math.abs(this.lastUpdated - this.worldInfo.time);
	var perHour = dt / 1000.0 / 3600.0; // Changes per hour

	this.sleepy += 1.0 * perHour;
	this.hunger += 2.0 * perHour;
	this.thirst += 3.0 * perHour;

	if (this.hunger >= 100.0) this.health -= 1.0 * perHour;
	if (this.thirst >= 100.0) this.health -= 2.0 * perHour;


	this.health = Math.max(Math.min(this.health, 100), 0);
	this.sleepy = Math.max(Math.min(this.sleepy, 100), 0);
	this.hunger = Math.max(Math.min(this.hunger, 100), 0);
	this.thirst = Math.max(Math.min(this.thirst, 100), 0);

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