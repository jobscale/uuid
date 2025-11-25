export class UUID {
  constructor() {
    this.uuid = this.v4;
  }

  v4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }
}

const { v4: uuid } = new UUID();
uuid.UUID = UUID;
uuid.uuid = uuid;
uuid.v4 = uuid;
export const v4 = uuid;
export { uuid };
export default uuid;
