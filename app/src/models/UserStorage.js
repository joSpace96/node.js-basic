"use strict";

class UserStorage {
  // #표시는 변수를 은닉?
  static #users = {
    id: ["손사장", "황이사", "박부장", "조대리"],
    password: ["1", "12", "123", "1234"],
    name: ["손흥민", "황희찬", "박지성", "조현우"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
