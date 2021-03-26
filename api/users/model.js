const db = require("../../data/dbConfig");

const add = (user) => {
  return db("users").insert(user);
};
const find = () => {
  return db("users");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

module.exports = {
  add,
  find,
  findBy,
};
