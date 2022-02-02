/* eslint-disable no-bitwise */
class UUID {
  static v4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }
}

module.exports = UUID.v4;
module.exports.uuid = UUID.v4;
module.exports.v4 = UUID.v4;
