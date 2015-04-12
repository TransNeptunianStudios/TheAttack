AttackGame.Game = function (game) {

};

AttackGame.Game.prototype = {
	create: function () {

		this.add.sprite(0, 0, 'emptyRoom');
		this.frontDoor = new FrontDoor(this.game);
		this.game.add.existing(this.frontDoor);

		// Pause menu
		this.pauseScreen = new PauseScreen(this.game);
		this.game.add.existing(this.pauseScreen);

		this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.toggleStatus, this);
	},

	update: function () {

	},
	toggleStatus: function () {
		this.pause = !this.pause;
		this.pauseScreen.visible = this.pause;
	},
	gameOver: function () {
		this.state.start('GameOver');
	}
};