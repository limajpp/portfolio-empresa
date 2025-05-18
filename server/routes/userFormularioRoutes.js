import express from "express";
import UserFormularioController from "../controllers/userFormularioController.js";

const router = express.Router();

router.post("/enviarFormulario", UserFormularioController.enviarFormulario);

export default router;
