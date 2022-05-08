export class Buy {
  //總價
  private _total = 0;
  //擁有的集數
  private numofep = 0;
  //擁有的書本數
  private numofbook = 0;
  //總共8集每集有的量
  private count: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

  //選擇購買哪一集
  choose(episode: number) {
    //若選擇的是沒有的集數
    if (this.count[episode] === 0){
      this.count[episode] ++;
      this.numofbook ++;
      this.numofep ++;
    }else{
      //若選擇的集數已購買過
      this.count[episode] ++;
      this.numofbook ++;
    }
  }

  get total() {
    
    //dicount-part
    this._total += (100 * this.numofep);
    if (this.numofep === 2){
      this._total *= 0.95;
    }else if (this.numofep === 3){
      this._total *= 0.9;
    }else if (this.numofep === 4){
      this._total *= 0.8;
    }else if (this.numofep >= 5){
      this._total *= 0.75;
    }

    //undiscount-part
    let undiscount = 0;
    undiscount = this.numofbook - this.numofep;
    this._total += (100 * undiscount)

    return this._total;
  }

}
