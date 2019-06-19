class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.towers = this.towers();
    // this.setupTowers();
    this.render();
    this.bindHandler();
  }

  // setupTowers(){
  // //pull from this.game.towers
  // //and assign proper classes
  // }

  towers() {
    return this.game.towers;
  }

  bindHandler() {
    this.rootEl.on('click', '.list', e => {
      let curTower = $(e.target);
      this.render(curTower);
    });
  }

  render(curTower){
    let towersDOM = [
      $('.list1 .list__item'), 
      $('.list2 .list__item'), 
      $('.list3 .list__item')
    ];

    towersDOM.forEach(tower => {
    });

    console.log(this.towers);

    this.towers.forEach((tower, towerIdx) => {
      tower.forEach((el, idx) => {
        if (this.towers[towerIdx][idx]) {
          let towerDOM = towersDOM[towerIdx];


          // find lowest possible pos to append to + append
          let targetTower = $(towerDOM);
          let lowestOpenPos = 2;
          for (let i = 2; i >= 0; i--) {
            let classList = Array.from(targetTower[i].classList);
            if (!(classList.includes('item__1') || 
                  classList.includes('item__2') || 
                  classList.includes('item__3'))) {
              $(targetTower[i]).addClass(`item__${i + 1}`);
            }
            console.log(classList);
          }
          

          // create class to append (e.g. 'item__1')


        }
      });
    });

  }


}

module.exports = HanoiView;