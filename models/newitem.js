const { text } = require("express");
const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/connection");

class newitem extends Model {}

newitem.init(
  {
    
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      Image: {
        type: STRING,
        allowNull: false,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "newitem",
        key: "id",
      }}
    },
{
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "newitem",
}
);

module.exports = newitem;
