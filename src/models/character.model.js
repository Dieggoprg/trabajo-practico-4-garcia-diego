//MODELO DE LAS TABLAS
  import sequelize from "../config/database.js";
  import { DataTypes } from "sequelize";

  const PERSONAJES = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false 
      },
    ki: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
      },
    race: { 
      type: DataTypes.INTEGER,
      allowNull: false
      },
    gender: {
      type: DataTypes.STRING, 
      allowNull: false
      },
    description: {
      type: DataTypes.STRING 
      }

  });

  export default PERSONAJES;