const AbstractManager = require("./AbstractManager");

class WebsiteManager extends AbstractManager {
  static table = "website";

  insert(site) {
    return this.connection.query(
      `insert into ${WebsiteManager.table} (name, link) values (?, ?)`,
      [site.name, site.link]
    );
  }

  update(site) {
    return this.connection.query(
      `update ${WebsiteManager.table} set name = ?, set link = ?, where id = ?`,
      [site.name, site.link, site.id]
    );
  }
}

module.exports = WebsiteManager;
