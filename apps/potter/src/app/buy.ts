export class Buy {
  private _total = 0;
  private numofep = 0;
  //private numofbook = 0;
  //private count: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  choose(episode: number) {
      this.numofep ++;
  }

  get total() {
    this._total += 100 * this.numofep;
    if (this.numofep === 2){
      this._total *= 0.95;
    }else if (this.numofep === 3){
      this._total *= 0.9;
    }else if (this.numofep === 4){
      this._total *= 0.8;
    }else if (this.numofep >= 5){
      this._total *= 0.75;
    }
    return this._total;
  }

}
