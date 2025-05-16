import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}...`);
});

app.use("/", (req, res) => {
  res.send("API - Portfólio");
});
