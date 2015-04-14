AttackGame.Preloader = function (game) {
	AttackGame.WIDTH = 640;
	AttackGame.HEIGHT = 360;
};
AttackGame.Preloader.prototype = {
	preload: function () {
		// set background color and preload image
		this.stage.backgroundColor = '#000000';
		this.preloadBar = this.add.sprite((AttackGame.WIDTH - 311) / 2, (AttackGame.HEIGHT - 27) / 2, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		// load images
		this.load.image('TNSlogo', 'assets/TNS_logo.png');
		this.load.image('menuBackground', 'assets/Menu.png');
		this.load.image('title', 'assets/Title.png');
		this.load.image('gameOverScreen', 'assets/GameOverScreen.png');

		this.load.image('emptyRoom', 'assets/EmptyRoom.png');
		this.load.image('door', 'assets/Door.png');
		this.load.image('pauseBack', 'assets/PauseBackground.png');

		this.load.image('clock', 'assets/Clock.png');
		this.load.image('clock_h', 'assets/Clock_h.png');
		this.load.image('clock_m', 'assets/Clock_m.png');

		this.load.image('playerSymbol', 'assets/PlayerSymbol.png');
		this.load.image('homeSymbol', 'assets/HomeSymbol.png');
		this.load.image('worldSymbol', 'assets/WorldSymbol.png');
		this.load.image('settingsSymbol', 'assets/SettingsSymbol.png');

		// load spritesheets		
		this.load.spritesheet('startButton', 'assets/StartButton.png', 100, 40);
		this.load.spritesheet('resumeButton', 'assets/ResumeButton.png', 100, 40);
		this.load.spritesheet('saveButton', 'assets/SaveButton.png', 100, 40);

		// Load music
		//  Firefox doesn't support mp3 files, so use ogg
	},
	create: function () {
		// start the MainMenu state
		this.state.start('Splash');
	}
};