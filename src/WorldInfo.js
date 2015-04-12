WorldInfo = function (game) {
	this.time = new Date(2015, 3, 12, 3, 23, 0);

	// just for ideas
	this.typeOfAttack = "ZOMBIES";
	this.weather = "Clear";
}

WorldInfo.prototype.update = function (dt) {
	var multi = 100; // time multiplier

	this.time.setTime(this.time.getTime() + (dt * multi));
}