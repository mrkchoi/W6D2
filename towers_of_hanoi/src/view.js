class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    // this.setupTowers();
    this.render();
    this.bindHandler();
  }

  setupTowers(){
  //pull from this.game.towers
  //and assign proper classes
  }

  bindHandler() {
    this.rootEl.on('click', '.list', e => {
      let curTower = $(e.target);
      this.render(curTower);
    });
  }

  render(curTower){
    console.log(curTower);  
  }


}

module.exports = HanoiView;