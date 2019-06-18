let HanoiGame = require('./game.js');
let HanoiView = require('./view.js');

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);

  console.log('Hellooo');
});
