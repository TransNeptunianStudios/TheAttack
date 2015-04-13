AttackGame.MainMenu = function (game) {

};
AttackGame.MainMenu.prototype = {
	create: function () {
		this.add.sprite(0, 0, 'menuBackground');

		var title = this.add.sprite(AttackGame.WIDTH / 2, 70, 'title');
		title.anchor.setTo(0.5, 0);

		// add the button that will start the game
		this.startButton = this.add.button(AttackGame.WIDTH / 2,
			AttackGame.HEIGHT - 150,
			'resumeButton',
			this.startGame,
			this, 1, 0, 2);
		this.startButton.anchor.setTo(0.5);

		this.startButton = this.add.button(AttackGame.WIDTH / 2,
			AttackGame.HEIGHT - 100,
			'startButton',
			this.startGame,
			this, 1, 0, 2);
		this.startButton.anchor.setTo(0.5);

		var text = "Version: 0.1 Alfa";
		var style = {
			font: "20px Arial",
			fill: "#000000",
			align: "center"
		};
		var version = this.game.add.text(5, this.game.height - 30, text, style);

	},
	startGame: function () {
		// start the Game state
		this.state.start('Game');
	}
};