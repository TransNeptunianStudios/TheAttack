AttackGame.GameOver = function (game) {

};
AttackGame.GameOver.prototype = {
	init: function (worldInfoView) {
		this.worldInfoView = worldInfoView;
	},
	create: function () {
		localStorage.removeItem("PlayerSave");
		localStorage.removeItem("WorldSave");

		var background = this.add.sprite(0, 0, 'gameOverScreen');

		this.scoreText = this.game.add.text(
			this.game.width / 2,
			this.game.height / 2,
			"You survived for " + this.worldInfoView.getSurivalTimeString(), {
				font: "22px Arial",
				fill: "#000000"
			});
		this.scoreText.anchor.setTo(0.5, 0.5);

		this.game.input.onDown.add(this.startGame, this);
		this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.startGame, this);
	},
	startGame: function () {
		// start the Game state
		this.state.start('MainMenu');
	}
};