export class Buy {
  private _total = 0;
  //private count: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
  choose(episode: number) {
    if (this._total === 0) {
      this._total += 100;
    }else{
      this._total += 100;
      this._total *= 0.95;
    }
  }

  get total() {
    return this._total;
  }

}
