export class Buy {
  private _total = 0;
  private numofep = 0;
  //private numofbook = 0;
  //private count: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  choose(episode: number) {
      this.numofep ++;
  }

  get total() {
    if (this.numofep === 1){
      this._total += 100;
    }else if (this.numofep === 2){
      this._total += 200;
      this._total *= 0.95;
    }else if (this.numofep === 3){
      this._total += 300;
      this._total *= 0.9;
    }
    return this._total;
  }

}
