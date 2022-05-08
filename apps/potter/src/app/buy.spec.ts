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

});
