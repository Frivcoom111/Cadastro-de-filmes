import express from "express";
import multer from "multer";
import Filme from "../models/FilmeModel.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, "public"), // ← salva na pasta public
  filename: (req, file, cb) => cb(null, file.originalname) // ← mantém o nome original
});

const upload = multer({ storage });

const routes = express.Router();

// Rota criar usuário
routes.post("/criar", upload.single("imagem"), async (request, response) => {
  try {
    const { titulo, diretor, ano, genero, descricao, destaque } = request.body;

    const imagem = "/" + request.file.originalname; // ← pega o caminho da imagem

    if (!titulo || !diretor || !ano || !genero || !descricao || !imagem || !destaque) {
      return response.status(400).json({ erro: "Todos os campos são obrigatórios!" });
    }

    await Filme.create({ titulo, diretor, ano, genero, descricao, imagem, destaque });

    response.status(201).redirect("/");
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar criar filme." });
  }
});

// Rota deletar usuário
routes.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Filme.destroy({
      where: {
        id
      }
    });

    if (result === 0) {
      // ← destroy retorna o número de linhas deletadas
      return response.status(404).json({ erro: "Filme não encontrado!" });
    }

    response.status(200).json({ message: "Filme deletado com sucesso!", filmeDelete: true });
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar deletar filme." });
  }
});

export default routes;
