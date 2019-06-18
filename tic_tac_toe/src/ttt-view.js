class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.square', e => this.makeMove(e.target));
  }
  
  makeMove($square) {
    let $target = $($square);
    let pos = $target.data('pos').split(',').map(el => parseInt(el));
    
    if (this.game.playMove(pos)){
      this.placeMark(pos, this.currentPlayer());
    }

    if (this.game.isOver()) {
      if (this.game.winner()) {
        // WINNER
        this.renderWinningBoard();
        this.renderGameOverMessage();
      } else {
        // DRAW
        this.renderDrawBoard();
        this.renderGameOverMessage();
      }
    }

  }

  placeMark(pos, mark) {
    //place the mark on square
    //change color of square
  }

  renderWinningBoard() {
    // Change color of all squares::::
    // Winning squares: green bg + white color
    // Losing squares: white bg + red color
    // Unplayed squares: white bg + empty
  }

  renderDrawBoard() {
    // Change color of all squares::::
    // All squares: white bg + red color
  }

  renderGameOverMessage() {
    if (this.game.winner()) {
      // ${player} wins!
    } else {
      // Everyone loses! (draw)
    }
  }

  currentPlayer() {
    this.game.currentPlayer();
  }

  setupBoard() {
    let $ul = $('<ul></ul>');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $(`<li class=\"square\" data-pos="${[i, j]}"></li>`);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
