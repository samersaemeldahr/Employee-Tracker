const connection = require("./connection");

class Database {

  constructor(connection) {
    this.connection = connection;
  }

  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
}

module.exports = new Database(connection);
