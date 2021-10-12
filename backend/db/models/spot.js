'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User,{foreignKey:'userId'})
    Spot.hasMany(models.Booking, {foreignKey:'spotId', onDelete:'CASCADE', hooks:true})
    Spot.hasMany(models.Image,{foreignKey: 'spotId', onDelete:'CASCADE', hooks:true})


  };
  return Spot;
};