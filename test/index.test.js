const { uuid, v4 } = require('..');

const { debug } = console;

describe('test uuid', () => {
  it('test uuid', () => {
    debug([uuid(), uuid(), uuid()]);
    expect(uuid()).not.toBe(undefined);
  });

  it('test v4', () => {
    debug([v4(), v4(), v4()]);
    expect(v4()).not.toBe(undefined);
  });
});
