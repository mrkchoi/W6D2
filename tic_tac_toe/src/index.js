const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./game/game.js'); // require appropriate file

  $(() => {
    let $board = $('.ttt');
    let view = new View(new Game(), $board);
  });
