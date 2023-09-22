'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association 
      this.hasMany(models.Show,{
        foreignKey:'theaterId',
      })
    }
  }
  Theater.init({
    theaterName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Theater',
  });
  return Theater;
};