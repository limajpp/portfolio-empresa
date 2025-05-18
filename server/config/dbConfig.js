import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async function () {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error(`A conexão com o banco de dados falhou, ${error}`);
  }
};

export default connectDb;
