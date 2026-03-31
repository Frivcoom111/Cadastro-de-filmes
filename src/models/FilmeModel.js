import Sequelize from "sequelize";
import connectDatabase from "../config/database.js";

const Filme = connectDatabase.define(
  "Filme",
  {
    titulo: {
      type: Sequelize.STRING
    },
    diretor: {
      type: Sequelize.STRING
    },
    ano: {
      type: Sequelize.INTEGER
    },
    genero: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING
    },
    imagem: {
      type: Sequelize.STRING
    },
    destaque: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false 
  }
);

export default Filme;
