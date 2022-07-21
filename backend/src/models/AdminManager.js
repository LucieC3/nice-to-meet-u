const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "admin";

  findByMail(email) {
    return this.connection.query(
      `select * from ${AdminManager.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(`select id, email from ${AdminManager.table}`);
  }

  insert(admin) {
    return this.connection.query(
      `insert into ${AdminManager.table} (email, password) values (?, ?)`,
      [admin.email, admin.hash]
    );
  }

  update(admin) {
    return this.connection.query(
      `update ${AdminManager.table} set email = ?, password = ?, where id = ?`,
      [admin.email, admin.hash, admin.id]
    );
  }

  delete(admin) {
    return this.connection.query(
      `delete from ${AdminManager.table} where id = ?`,
      [admin.id]
    );
  }
}

module.exports = AdminManager;
