"use strict";

const hello = (req, res) => {
  res.render("home/index");
  console.log("접속");
};

const login = (req, res) => {
  res.render("home/login");
  console.log("로그인");
};

// 모듈화
module.exports = {
  hello,
  login,
};
