AttackGame.GameOver = function (game) {

};
AttackGame.GameOver.prototype = {
	create: function () {
		var background = this.add.sprite(0, 0, 'gameOverScreen');

		this.game.input.onDown.add(this.startGame, this);
		this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.startGame, this);
	},
	startGame: function () {
		// start the Game state
		this.state.start('MainMenu');
	}
};