import simulator from '../scripts/index'

describe('Simulator module', () => {
  it('should return object simulator', () => {
    expect(simulator.hasOwnProperty('results')).toBeTruthy()
    expect(simulator.hasOwnProperty('simulation')).toBeTruthy()
  });
})
