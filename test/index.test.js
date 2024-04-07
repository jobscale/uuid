const v4uuid = require('..');

const { UUID, uuid, v4 } = v4uuid;

const logger = console;

const count = 500;

describe('test uuid', () => {
  const list = [];

  for (let i = 0; i < count; i += 1) {
    describe(`test uuid v4 ${i}`, () => {
      it('test UUID', () => {
        const { uuid: uuidGen } = new UUID();
        const unit = [uuidGen(), uuidGen(), uuidGen(), uuidGen(), uuidGen()];
        list.push(unit);
        expect(unit.length).toBe(5);
      });

      it('test v4uuid', () => {
        const unit = [v4uuid(), v4uuid(), v4uuid(), v4uuid(), v4uuid()];
        list.push(unit);
        expect(unit.length).toBe(5);
      });

      it('test uuid', () => {
        const unit = [uuid(), uuid(), uuid(), uuid(), uuid()];
        list.push(unit);
        expect(unit.length).toBe(5);
      });

      it('test v4', () => {
        const unit = [v4(), v4(), v4(), v4(), v4()];
        list.push(unit);
        expect(unit.length).toBe(5);
      });
    });
  }

  describe('check unique', () => {
    it('check unique', () => {
      logger.info(...list);
      const uniqueSet = new Set();
      list.flat().forEach(uid => uniqueSet.add(uid));
      expect(Array.from(uniqueSet).length).toBe(count * 20);
    });
  });
});
