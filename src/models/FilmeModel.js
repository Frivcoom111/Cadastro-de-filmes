import db from "../config/database.js";

class Filme {
  create({ titulo, diretor, ano, genero, descricao, imagem, destaque }) {
    const stmt = db.prepare(
      "INSERT INTO filmes (titulo, diretor, ano, genero, descricao, imagem, destaque) VALUES (?, ?, ?, ?, ?, ?, ?)"
    );

    const result = stmt.run(titulo, diretor, ano, genero, descricao, imagem, destaque);

    if (result.changes > 0) {
      return { success: true, message: "Filme cadastrado com sucesso!" };
    } else {
      return { success: false, message: "Erro ao cadastrar filme." };
    }
  }

  findAll() {
    const filmes = db.prepare("SELECT * FROM filmes").all();
    return filmes;
  }

  deleteById(id) {
    const stmt = db.prepare("DELETE FROM filmes WHERE id = ?");
    const results = stmt.run(id);

    if (results.changes > 0) {
      return { success: true, message: "Filme deletado com sucesso!" };
    } else {
      return { success: false, message: "Erro ao deletar filme." };
    }
  }
}

export default Filme;
