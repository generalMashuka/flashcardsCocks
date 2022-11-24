const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Quiz }) {
      Topic.Quizes = Topic.hasMany(Quiz, { foreignKey: 'topic_id' });
    }
  }
  Topic.init({
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
