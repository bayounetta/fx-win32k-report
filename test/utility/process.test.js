import { convertLogToJSON, findAndProcessLogs, main } from '../../src/utility/process';

describe('cli process', () => {
  it('exports convertLogToJSON function', () => {
    expect(convertLogToJSON).toBeInstanceOf(Function);
  });
});
