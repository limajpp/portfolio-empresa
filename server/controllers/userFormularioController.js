import UserFormulario from "../models/UserFormulario.js";

class UserFormularioController {
  static enviarFormulario = async (req, res) => {
    try {
      const { nome, email, telefone } = req.body;

      const emailExistente = await UserFormulario.findOne({ email: email });
      if (emailExistente)
        return res.status(409).send({
          mensagem: "Falha ao enviar o formulário",
          erro: "O e-mail já existe...",
        });

      const telefoneExistente = await UserFormulario.findOne({
        telefone: telefone,
      });
      if (telefoneExistente)
        return res.status(409).send({
          mensagem: "Falha ao enviar o formulário",
          erro: "O telefone já existe...",
        });

      const novoFormulario = { nome, email, telefone };
      const formularioSalvo = await UserFormulario.create(novoFormulario);
      console.log("Formulário enviado com sucesso!");
      res.status(201).send({
        mensagem: "Novo formulário criado com sucesso!",
        formularioSalvo: formularioSalvo,
      });
    } catch (error) {
      console.error(
        `Algo inesperado aconteceu ao tentar enviar o formulário, ${error}`
      );
      res.status(400).send({
        mensagem: "Falha ao enviar o formulário...",
        erro: error.message || error,
      });
    }
  };
}

export default UserFormularioController;
