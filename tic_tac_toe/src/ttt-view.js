class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul></ul>');


    let i = 0;
    while (i < 9) {
      $ul.append('<li>hello</li>');
      i += 1;
    }

    this.$el.append($ul);
  }
}

module.exports = View;
