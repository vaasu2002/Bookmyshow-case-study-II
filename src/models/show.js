'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Theater,{
        foreignKey:'theaterId',
        targetKey: 'id',
        as:'theaterDetails'
      })

      this.belongsTo(models.Movie,{
        foreignKey:'movieId',
        targetKey: 'id',
        as:'movieDetails'
      })

      this.belongsTo(models.Language,{
        foreignKey:'languageId',
        targetKey: 'id',
        as:'languageDetails'
      })
    }
  }
  Show.init({
    theaterId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    time: {
      type: DataTypes.TIME,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};