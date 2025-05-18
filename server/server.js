import dotenv from "dotenv";
import app from "./app/app.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}...`);
});
