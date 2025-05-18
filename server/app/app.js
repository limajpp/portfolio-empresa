import express from "express";
import cors from "cors";
import connectDb from "../config/dbConfig.js";
import userFormularioRoutes from "../routes/userFormularioRoutes.js";

const app = express();
app.use(express.json(), cors());

app.get("/", (req, res) => {
  res.send("API - Site de portfólio");
});
connectDb();

app.use("/api/usersFormulario/", userFormularioRoutes);

app.use((req, res) => {
  res.status(404).send({ erro: `Rota ${req.originalUrl} não encontrada...` });
});

export default app;
