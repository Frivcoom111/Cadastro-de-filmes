import db from "../config/database.js";

class Filme {
    create(titulo, diretor, ano, genero, descricao, imagem, destaque) {
        const stmt = db.prepare("INSERT INTO filmes (titulo, diretor, ano, genero, descricao, imagem, destaque) VALUES (?, ?, ?, ?, ?, ?, ?)");

        stmt.run(titulo, diretor, ano, genero, descricao, imagem, destaque);

        if (stmt.changes > 0){
            return { success: true, message: "Filme cadastrado com sucesso!" };
        } else {
            return { success: false, message: "Erro ao cadastrar filme." };
        }
    }
}