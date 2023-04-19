"use strict";

const users = {
  id: ["손사장", "황이사", "박부장", "조대리"],
  password: ["1", "12", "123", "1234"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({ success: true });
      }
    }

    return res.json({ success: false, msg: "로그인에 실패하셨습니다." });
  },
};

// 모듈화
module.exports = {
  output,
  process,
};
