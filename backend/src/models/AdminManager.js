const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "admin";

  findByPseudo(pseudo) {
    return this.connection.query(
      `select * from ${AdminManager.table} where pseudo = ?`,
      [pseudo]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, pseudo from ${AdminManager.table}`
    );
  }

  insert(admin) {
    return this.connection.query(
      `insert into ${AdminManager.table} (pseudo, password) values (?, ?)`,
      [admin.pseudo, admin.hash]
    );
  }

  update(admin) {
    return this.connection.query(
      `update ${AdminManager.table} set pseudo = ?, password = ?, where id = ?`,
      [admin.pseudo, admin.hash, admin.id]
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
