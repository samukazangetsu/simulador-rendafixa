import simulator from '../scripts/index';

describe('Simulator module', () => {
  it('should return object simulator', () => {
    expect(Object.prototype.hasOwnProperty.call(simulator, 'results')).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(simulator, 'simulation')).toBeTruthy();
  });
});
