AttackGame.Game = function (game) {};

AttackGame.Game.prototype = {
	init: function (playerInfo, homeInfoInfo, worldInfo) {
		this.playerInfo = playerInfo;
		this.homeInfo = homeInfoInfo
		this.worldInfo = worldInfo;
	},
	create: function () {
		// Create room
		this.home = new Home(this.game, this.homeInfo, this.worldInfo.time);

		// HUD
		this.hud = new HUD(this.game, this.playerInfo, this.worldInfo);
		this.game.add.existing(this.hud);
	},
	update: function () {
		var dt = this.game.time.elapsed;
		if (this.hud.pauseOn())
			dt = 0;

		var simDt = this.worldInfo.update(dt);

		this.playerInfo.update(simDt);
		this.homeInfo.update(simDt);

		this.home.update(simDt);

		this.hud.update();

		if (this.playerInfo.gameOver)
			this.gameOVer();
	},
	gameOVer: function () {
		this.state.start('GameOver', true, false, this.hud.worldInfoView);
	}
};