WorldInfo = function (game) {
	this.attackStart = new Date();
	this.time = new Date(this.attackStart.getTime());

	// just for ideas
	this.typeOfAttack = "ZOMBIES";
	this.weather = "Clear";
}

WorldInfo.prototype.update = function (dt) {
	var multi = 10000; // time multiplier

	this.time.setTime(this.time.getTime() + (dt * multi));
}

WorldInfo.prototype.timeSinceAttack = function () {
	return new Date(Math.abs(this.time - this.attackStart));
}