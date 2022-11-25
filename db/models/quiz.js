const {
  Model, TEXT,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Quiz.Topic = Quiz.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Quiz.init({
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};
