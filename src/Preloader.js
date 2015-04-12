AttackGame.Preloader = function (game) {
	AttackGame.WIDTH = 800;
	AttackGame.HEIGHT = 600;
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

		// load spritesheets		
		this.load.spritesheet('startButton', 'assets/StartButton.png', 200, 100);

		// Load music
		//  Firefox doesn't support mp3 files, so use ogg
	},
	create: function () {
		// start the MainMenu state
		this.state.start('Splash');
	}
};