import mongoose from "mongoose";

const userFormulario = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      match: /.+\@.+\..+/,
      lowercase: true,
      trim: true,
      unique: true,
    },
    telefone: {
      type: mongoose.Schema.Types.String,
      required: true,
      match: /^\d{10,11}$/,
      unique: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(
  "UserFormulario",
  userFormulario,
  "UsersFormulario"
);
