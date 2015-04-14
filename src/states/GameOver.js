AttackGame.GameOver = function (game) {

};
AttackGame.GameOver.prototype = {
	init: function (worldInfo) {
		this.worldInfo = worldInfo;
	},
	create: function () {
		localStorage.removeItem("PlayerSave");
		localStorage.removeItem("WorldSave");

		var background = this.add.sprite(0, 0, 'gameOverScreen');

		this.scoreText = this.game.add.text(
			this.game.width / 2,
			this.game.height / 2,
			this.getSurivalTimeString(), {
				font: "22px Arial",
				fill: "#000000"
			});
		this.scoreText.anchor.setTo(0.5, 0.5);

		this.game.input.onDown.add(this.startGame, this);
		this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.startGame, this);
	},
	getSurivalTimeString: function () {
		var time = new Date(Math.abs(this.worldInfo.time - this.worldInfo.attackStart));
		var line = "You survived for ";

		var days = Math.floor(time.getTime() / 1000 / 60 / 60 / 24);
		var hours = Math.floor(time.getTime() / 1000 / 60 / 60) % 24;
		var min = Math.floor(time.getTime() / 1000 / 60) % 60;
		var sec = Math.floor(time.getTime() / 1000) % 60;

		if (days > 0) line += days + " day(s) "
		if (hours > 0) line += hours + " hour(s) "
		if (min > 0) line += min + " min ";
		if (sec > 0) line += sec + " sec ";

		return line;
	},
	startGame: function () {
		// start the Game state
		this.state.start('MainMenu');
	}
};