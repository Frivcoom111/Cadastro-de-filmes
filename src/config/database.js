import Database from 'better-sqlite3';

const db = new Database("top_filmes.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS filmes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        diretor TEXT,
        ano INTEGER,
        genero TEXT,
        descricao TEXT,
        imagem TEXT,
        destaque INTEGER DEFAULT 0
    )
`)

export const connectDatabase = () => {
    try {
        db.prepare("SELECT 1").get();
        console.log("Conectado com banco de dados.")
    } catch (error) {
        console.error(error);
        console.log("Erro ao conectar com banco de dados.");
    }
}

export default db;