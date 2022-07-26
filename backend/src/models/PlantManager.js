const AbstractManager = require("./AbstractManager");
const CategoryManager = require("./CategoryManager");

class PlantManager extends AbstractManager {
  static table = "plant";

  findAll(category) {
    return this.connection.query(
      `select plant.id, plant.name, plant.light, plant.water, plant.humidity, plant.image, category.name as category from ${PlantManager.table} inner join ${CategoryManager.table} on plant.category_id = category.id`,
      [category]
    );
  }

  find(id) {
    return this.connection.query(
      `select plant.id, plant.name, plant.light, plant.water, plant.humidity, plant.image, category.name as category from ${PlantManager.table} inner join ${CategoryManager.table} on plant.category_id = category.id where plant.id = ?`,
      [id]
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${PlantManager.table} (name, category_id, light, water, humidity, image) values (?, ?, ?, ?, ?, ?)`,
      [
        item.name,
        item.categoryPlant,
        item.light,
        item.water,
        item.humidity,
        item.image,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${PlantManager.table} set name = ? where id = ?`,
      [item.name, item.id]
    );
  }
}

module.exports = PlantManager;
