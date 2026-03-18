import express from "express";
import expressHandlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import { movies } from "./routes/moviesRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();
app.use(express.json());

// Configuração handlebars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "public")));

app.engine(
  "handlebars",
  expressHandlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  }),
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Renderização index
app.get("/", async (request, response) => {
  try {
    response.render("index", { movies });
  } catch (error) {
    console.error(error);
    response.send("Erro ao carregar filmes.");
  }
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// Rotas
app.use("/movies", moviesRoutes);

export default app;
