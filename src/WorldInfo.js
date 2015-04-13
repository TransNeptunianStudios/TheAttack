WorldInfo = function (multi) {
	this.attackStart = new Date();
	this.time = new Date(this.attackStart.getTime());

	// just for ideas
	this.typeOfAttack = "ZOMBIES";
	this.weather = "Clear";

	this.multi = multi;
}

WorldInfo.prototype.update = function (dt) {
	this.time.setTime(this.time.getTime() + (dt * this.multi));
	return dt * this.multi;
}