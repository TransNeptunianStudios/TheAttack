AttackGame.MainMenu = function (game) {

};
AttackGame.MainMenu.prototype = {
	create: function () {
		this.add.sprite(0, 0, 'menuBackground');

		var title = this.add.sprite(AttackGame.WIDTH / 2, 70, 'title');
		title.anchor.setTo(0.5, 0);

		// add the button that will start the game
		var playerInfo = localStorage.getItem("PlayerSave");
		var worldINfo = localStorage.getItem("WorldSave");
		if (playerInfo != undefined && worldINfo != undefined) {
			var resumeButton = this.add.button(AttackGame.WIDTH / 2,
				AttackGame.HEIGHT - 150,
				'resumeButton',
				this.resumeGame,
				this, 1, 0, 2);
			resumeButton.anchor.setTo(0.5);
		}

		var startButton = this.add.button(AttackGame.WIDTH / 2,
			AttackGame.HEIGHT - 100,
			'startButton',
			this.startGame,
			this, 1, 0, 2);
		startButton.anchor.setTo(0.5);

		var text = "Version: 0.2 Alfa";
		var style = {
			font: "20px Arial",
			fill: "#000000",
			align: "center"
		};
		var version = this.game.add.text(5, this.game.height - 30, text, style);

	},
	resumeGame: function () {
		var playerInfo = JSON.parse(localStorage["PlayerSave"]);
		var homeInfo = JSON.parse(localStorage["HomeSave"]);
		var worldInfo = JSON.parse(localStorage["WorldSave"]);

		// Dates doesnt work to well in json.
		worldInfo.attackStart = new Date(worldInfo.attackStart);
		worldInfo.time = new Date(worldInfo.time);

		// Is..is this how you do it?
		worldInfo.update = WorldInfo.prototype.update;
		homeInfo.update = HomeInfo.prototype.update;
		playerInfo.update = PlayerInfo.prototype.update;

		this.state.start('Game', true, false,
			playerInfo,
			homeInfo,
			worldInfo);
	},
	startGame: function () {
		var timeMulti = 2000;
		this.state.start('Game', true, false,
			new PlayerInfo(),
			new HomeInfo(),
			new WorldInfo(timeMulti));
	}
};