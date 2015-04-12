AttackGame.Game = function (game) {};

AttackGame.Game.prototype = {
	create: function () {

		// Create world info
		this.worldInfo = new WorldInfo(this.game);

		// Pause menu
		this.pauseScreen = new PauseScreen(this.game);
		this.game.add.existing(this.pauseScreen);

		// Create room
		this.add.sprite(0, 0, 'emptyRoom');
		this.frontDoor = new FrontDoor(this.game);
		this.game.add.existing(this.frontDoor);

		//Clock
		this.clock = new Clock(this.game, this.worldInfo.time);
		this.game.add.existing(this.clock);

		this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.toggleStatus, this);
	},
	update: function () {
		this.worldInfo.update(this.game.time.elapsed);
		this.clock.setTime(this.worldInfo.time);
	},
	toggleStatus: function () {
		this.pause = !this.pause;
		this.pauseScreen.visible = this.pause;
	},
	gameOver: function () {
		this.state.start('GameOver');
	}
};