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
		var dt = this.game.time.elapsed;
		if (this.hud.pauseOn())
			dt = 0;

		var simDt = this.worldInfo.update(dt);
		this.clock.setTime(this.worldInfo.time);
		this.playerInfo.update(simDt);

		this.hud.update();

		if (this.playerInfo.gameOver)
			this.gameOVer();
	},
	gameOVer: function () {
		this.state.start('GameOver', true, false, this.hud.worldInfoView);
	}
};