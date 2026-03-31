import { Sequelize } from "sequelize";

const connectDatabase = new Sequelize({
  dialect: "sqlite",
  storage: "./top_filmes.db"
});

export default connectDatabase;
