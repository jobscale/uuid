const v4uuid = require('..');

const { uuid, v4 } = v4uuid;
const { debug } = console;

describe('test uuid', () => {
  it('test v4uuid', () => {
    debug([v4uuid(), v4uuid(), v4uuid()]);
    expect(v4uuid()).not.toBe(undefined);
  });

  it('test uuid', () => {
    debug([uuid(), uuid(), uuid()]);
    expect(uuid()).not.toBe(undefined);
  });

  it('test v4', () => {
    debug([v4(), v4(), v4()]);
    expect(v4()).not.toBe(undefined);
  });
});
