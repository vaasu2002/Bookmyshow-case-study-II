'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Show,{
        foreignKey:'showId',
        targetKey: 'id',
        as:'showDetails'
      })

      this.belongsTo(models.User,{
        foreignKey:'userId',
        targetKey: 'id',
        as:'userDetails'
      })
    }
  }
  Booking.init({
    showId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type:DataTypes.ENUM,
      values: ['BOOKED', 'CANCELLED', 'INITIATED', 'PENDING'],
      defaultValue: 'INITIATED',
      allowNull: false
    },
    noofSeats: {
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    totalCost: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};