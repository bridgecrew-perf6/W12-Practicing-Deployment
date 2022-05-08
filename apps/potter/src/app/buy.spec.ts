import { Buy } from './buy';

describe('Buy', () => {

  it('should create an instance', () => {
    expect(new Buy()).toBeTruthy();
  });

  test('buy one potter 1', () => {
    const buy = new Buy();
    buy.choose(1);
    expect(buy.total).toBe(100);
  });

  test('buy one potter 1 and one potter 2', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    expect(buy.total).toBe(190);
  });

  test('buy one potter 1, one potter 2, and one potter 3', () => {
    const buy = new Buy();
    buy.choose(1);
    buy.choose(2);
    buy.choose(3);
    expect(buy.total).toBe(270);
  });

});
