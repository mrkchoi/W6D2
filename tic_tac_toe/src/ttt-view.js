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
    this.game.playMove(pos);

    if (!this.alreadyPlayedPos($target)) {
      this.placeMark($target, this.currentPlayer());
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

  placeMark(target, mark) {
    //place the mark on square
    //change color of square
    target.addClass('regular-mark');
    target.text(mark);
  }

  alreadyPlayedPos(target) {
    // If text of div at pos is not empty return T, else return F
    console.log(` target.text: ${target.text()}`);
    return (target.text() !== '') ? true : false;
  }


  renderWinningBoard() {
    // Change color of all squares::::
    // Winning squares: green bg + white color
    // Losing squares: white bg + red color
    // Unplayed squares: white bg + empty
    let winner = this.game.winner();
    let loser = winner === 'x' ? 'o' : 'x';
    let squares = $('.square');

    for (let i = 0; i < squares.length; i++) {
      let current = $(squares[i]);

      if (current.text() === winner) {
        current.addClass('loser-draw-square');
      } else if (current.text() === loser){
        current.addClass('winner-square');
      } else {
        current.addClass('neutral-square');
      }
    }
  } 

  renderDrawBoard() {
    // Change color of all squares::::
    // All squares: white bg + red color
    let squares = $('.square');
    for (let i = 0; i < squares.length; i++) {
      let current = $(squares[i]);
      current.addClass('loser-draw-square');
    }
  }

  renderGameOverMessage() {
    if (this.game.winner()) {
      // ${player} wins!
      let winner = this.game.winner();
      winner = winner === 'x' ? 'o' : 'x';

      let msgEl = $("<figcaption>");
      let mainContainer = $('.main__container');

      msgEl.html(`You da real MVP, playa <span>${winner.toUpperCase()}<span>.`);
      mainContainer.append(msgEl);
    } else {
      // Everyone loses! (draw)
      let msgEl = $("<figcaption>");
      let mainContainer = $('.main__container');

      msgEl.html(`Seriously? Neither one of ya?`);
      mainContainer.append(msgEl);
    }
  }

  currentPlayer() {
    return this.game.currentPlayer;
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
