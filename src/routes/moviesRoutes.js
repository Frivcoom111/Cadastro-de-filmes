import express, { request, response } from "express";
import Filme from "../models/FilmeModel.js";

const routes = express.Router();

const filme = new Filme();

routes.get("/listar", (request, response) => {
  try {
    const filmes = filme.findAll();

    if (!filmes) return response.status(404).json({ message: "Erro ao listar filmes." });

    response.status(200).json(filmes);
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar listar filmes." });
  }
});

routes.post("/criar", (request, response) => {
  try {
    const { titulo, diretor, ano, genero, descricao, imagem, destaque } = request.body;

    if (!titulo || !diretor || !ano || !genero || !descricao || !imagem || !destaque) {
      return response.status(400).json({ erro: "Todos os campos são obrigatórios!" });
    }

    const filmeCriado = filme.create({ titulo, diretor, ano, genero, descricao, imagem, destaque });

    if (!filmeCriado.success) {
      return response.status(404).json(filmeCriado);
    }

    response.status(201).json(filmeCriado);
  } catch (error) {
    console.error(error);
    response.status(500).json({ erro: "Erro no servidor ao tentar criar filme." });
  }
});

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

// routes.post("/seed", (request, response) => {
//   try {
//     movies.forEach(movie => filme.create(movie));
//     response.status(201).json({ message: "Filmes inseridos com sucesso!" });
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({ erro: "Erro ao inserir filmes." });
//   }
// });

export default routes;
