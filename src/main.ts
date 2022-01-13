import 'phaser'

let game: Phaser.Game

let gameOptions = {}

class PreloadGame extends Phaser.Scene {
  constructor() {
    super('PreloadGame')
  }
  preload() {}
  create() {}
}

class GameData {
  constructor() {}
}

class PlayGame extends Phaser.Scene {

  constructor() {
    super('PlayGame')
  }

  preload(): void {}
  create(): void {}
}

window.onload = () => {
  let gameConfig: Phaser.Types.Core.GameConfig = {}

  game = new Phaser.Game(gameConfig)
}
