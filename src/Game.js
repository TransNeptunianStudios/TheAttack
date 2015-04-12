AttackGame.Game = function (game) {};

AttackGame.Game.prototype = {
	create: function () {

		// Create world info
		this.worldInfo = new WorldInfo(this.game);

		// Create player info
		this.playerInfo = new PlayerInfo(this.game, this.worldInfo);

		// Pause menu
		this.pauseMenu = new PauseMenu(this.game);
		this.game.add.existing(this.pauseMenu);

		// Create room
		this.add.sprite(0, 0, 'emptyRoom');
		this.frontDoor = new FrontDoor(this.game);
		this.game.add.existing(this.frontDoor);

		//Clock
		this.clock = new Clock(this.game, this.worldInfo.time);
		this.game.add.existing(this.clock);

		this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.togglePause, this);
		this.pause = false;
	},
	update: function () {
		if (this.playerInfo.isGameOver())
			this.gameOver();

		if (!this.pause) {
			this.worldInfo.update(this.game.time.elapsed);
			this.clock.setTime(this.worldInfo.time);

			this.playerInfo.update();
		}
	},
	togglePause: function () {
		this.pause = !this.pause;
		if (this.pause) {
			this.pauseMenu.show(this.playerInfo, this.worldInfo);
			this.game.world.bringToTop(this.pauseMenu);
		} else
			this.pauseMenu.hide();
	},
	gameOver: function () {
		this.state.start('GameOver', true, false, this.worldInfo);
	}
};