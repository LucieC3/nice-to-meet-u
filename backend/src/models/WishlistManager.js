const AbstractManager = require("./AbstractManager");

class WishlistManager extends AbstractManager {
  static table = "wishlist";

  insert(element) {
    return this.connection.query(
      `insert into ${WishlistManager.table} (name) values (?)`,
      [element.name]
    );
  }

  update(site) {
    return this.connection.query(
      `update ${WishlistManager.table} set name = ?, where id = ?`,
      [site.name, site.id]
    );
  }
}

module.exports = WishlistManager;
