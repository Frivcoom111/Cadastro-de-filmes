import express from "express";
import expressHandlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import moviesRoutes from "./routes/moviesRoutes.js";
import Filme from "./models/FilmeModel.js";
import { AsyncLocalStorage } from "async_hooks";

const app = express();
app.use(express.json());

// Configuração handlebars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: true })); // Lê os dados do HTML (cadastro.handlebars)

app.engine(
  "handlebars",
  expressHandlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts")
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

// Renderização index
app.get("/", async (request, response) => {
  try {
    const movies = await Filme.findAll({
      raw: true
    });
    const destaques = movies.filter((m) => m.destaque === 1);
    response.render("index", { movies, destaques });
  } catch (error) {
    console.error(error);
    response.send("Erro ao carregar filmes.");
  }
});

// Renderização cadastro
app.get("/cadastro", (request, response) => {
  response.render("cadastro");
});

// Renderização detalhes
app.get("/detalhes/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const detalhesFilme = await Filme.findOne({
      raw: true,
      where: { id }
    });

    if (!detalhesFilme) return response.status(400).send("Filme não encontrado.");

    response.render("detalhes", { filme: detalhesFilme });
  } catch (error) {
    console.error(error);
    response.status(500).send("Erro ao carregar filme.");
  }
});

// Rotas
app.use("/filmes", moviesRoutes);

export default app;
