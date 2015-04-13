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
	},
	update: function () {
		if (!this.pauseMenu.pauseOn) {
			this.worldInfo.update(this.game.time.elapsed);
			this.clock.setTime(this.worldInfo.time);
			this.playerInfo.update();
		}
	},
};