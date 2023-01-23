const { Model, DataTypes, STRING } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class mystore extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

mystore.init(
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
    
  },
  
  {
  

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mystore",
  }
);

module.exports = mystore;
