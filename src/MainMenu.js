AttackGame.MainMenu = function (game) {

};
AttackGame.MainMenu.prototype = {
	create: function () {
		this.add.sprite(0, 0, 'menuBackground');

		var title = this.add.sprite(AttackGame.WIDTH / 2, 155, 'title');
		title.anchor.setTo(0.5, 0);

		// add the button that will start the game
		this.startButton = this.add.button(AttackGame.WIDTH / 2,
			AttackGame.HEIGHT - 130,
			'startButton',
			this.startGame,
			this, 1, 0, 2);
		this.startButton.anchor.setTo(0.5);

	},
	startGame: function () {
		// start the Game state
		this.state.start('Game');
	}
};