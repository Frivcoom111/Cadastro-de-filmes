import express from "express";
import multer from "multer";
import Filme from "../models/FilmeModel.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, "public"), // ← salva na pasta public
  filename: (req, file, cb) => cb(null, file.originalname) // ← mantém o nome original
});

const upload = multer({ storage });

const routes = express.Router();

const filme = new Filme();


// Rota criar usuário
routes.post("/criar", upload.single("imagem"), (request, response) => {
  try {
    const { titulo, diretor, ano, genero, descricao, destaque } = request.body;
    const imagem = "/" +  request.file.originalname; // ← pega o caminho da imagem
    
    if (!titulo || !diretor || !ano || !genero || !descricao || !imagem || !destaque) {
      return response.status(400).json({ erro: "Todos os campos são obrigatórios!" });
    }
    
    const filmeCriado = filme.create({ titulo, diretor, ano, genero, descricao, imagem, destaque });
    
    if (!filmeCriado.success) {
      return response.status(404).json(filmeCriado);
    }
    
    response.status(201).redirect("/");
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar criar filme." });
  }
});

// Rota deletar usuário
routes.delete("/delete/:id", (request, response) => {
  try {
    const { id } = request.params;

    const result = filme.deleteById(id);

    if (!result.success) {
      return response.status(404).json(result);
    }
    
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar deletar filme." });
  }
});

// Rota listar usuário
// routes.get("/listar", (request, response) => {
//   try {
//     const filmes = filme.findAll();

//     if (!filmes) return response.status(404).json({ message: "Erro ao listar filmes." });

//     response.status(200).json(filmes);
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({ erro: "Erro no servidor ao tentar listar filmes." });
//   }
// });

// Seed para criar filmes
// routes.post("/seed", (request, response) => {
//     try {
//     movies.forEach(movie => filme.create(movie));
//     response.status(201).json({ message: "Filmes inseridos com sucesso!" });
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({ erro: "Erro ao inserir filmes." });
//   }
// });

export default routes;
