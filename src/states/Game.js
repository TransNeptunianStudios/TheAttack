AttackGame.Game = function (game) {};

AttackGame.Game.prototype = {
	init: function (playerInfo, worldInfo) {
		this.playerInfo = playerInfo;
		this.worldInfo = worldInfo;
	},
	create: function () {
		// Create room
		this.add.sprite(0, 0, 'emptyRoom');
		this.frontDoor = new FrontDoor(this.game);
		this.game.add.existing(this.frontDoor);

		// Clock
		this.clock = new Clock(this.game, this.worldInfo.time);
		this.game.add.existing(this.clock);

		// HUD
		this.hud = new HUD(this.game, this.playerInfo, this.worldInfo);
		this.game.add.existing(this.hud);
	},
	update: function () {
		if (!this.hud.pauseOn()) {
			this.worldInfo.update(this.game.time.elapsed);
			var simDt = this.worldInfo.update(this.game.time.elapsed);

			this.clock.setTime(this.worldInfo.time);
			this.playerInfo.update(simDt);

			if (this.playerInfo.gameOver)
				this.gameOVer();
		}
	},
	gameOVer: function () {
		this.state.start('GameOver', true, false, this.worldInfo);
	}
};