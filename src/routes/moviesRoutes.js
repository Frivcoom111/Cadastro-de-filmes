import express from "express";

const routes = express.Router();

export const movies = [
  {
    titulo: "Coringa",
    diretor: "Todd Phillips",
    ano: 2019,
    genero: "Drama, Thriller",
    descricao: "Arthur Fleck, um homem ignorado pela sociedade, inicia uma lenta descida à loucura e se transforma no famoso vilão do Batman, o Coringa.",
    imagem: "/coringa.png",
    destaque: 1
  },
  {
    titulo: "Duna",
    diretor: "Denis Villeneuve",
    ano: 2021,
    genero: "Ficção Científica, Aventura",
    descricao: "Paul Atreides, um jovem brilhante e talentoso, viaja para o planeta mais perigoso do universo para garantir o futuro de sua família e de seu povo.",
    imagem: "/duna.png",
    destaque: 1
  },
  {
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    ano: 2014,
    genero: "Ficção Científica, Drama",
    descricao: "Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
    imagem: "/interestelar.png",
    destaque: 1
  },
  {
    titulo: "Matrix",
    diretor: "Lana Wachowski, Lilly Wachowski",
    ano: 1999,
    genero: "Ficção Científica, Ação",
    descricao: "Um hacker descobre que a realidade que conhece é uma simulação criada por máquinas e é recrutado para uma guerra pela liberdade da humanidade.",
    imagem: "/matrix.png",
    destaque: 0
  },
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    ano: 1972,
    genero: "Drama, Crime",
    descricao: "A saga da família Corleone, uma poderosa dinastia do crime organizado americano, e a transformação de Michael Corleone em líder da máfia.",
    imagem: "/o-poderoso-chefao.png",
    destaque: 1
  },
  {
    titulo: "Oppenheimer",
    diretor: "Christopher Nolan",
    ano: 2023,
    genero: "Drama, História",
    descricao: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica durante o Projeto Manhattan na Segunda Guerra Mundial.",
    imagem: "/oppenheimer.png",
    destaque: 1
  },
  {
    titulo: "Parasita",
    diretor: "Bong Joon-ho",
    ano: 2019,
    genero: "Drama, Thriller",
    descricao: "A família Kim, sem emprego e vivendo na miséria, traça um plano para se infiltrar na vida de uma família rica, com consequências imprevisíveis.",
    imagem: "/parasita.png",
    destaque: 0
  },
  {
    titulo: "O Senhor dos Anéis",
    diretor: "Peter Jackson",
    ano: 2001,
    genero: "Fantasia, Aventura",
    descricao: "O hobbit Frodo Bolseiro recebe a missão de destruir o Um Anel nas chamas da Montanha da Perdição para salvar a Terra Média do Senhor do Escuro.",
    imagem: "/senhor-dos-aneis.png",
    destaque: 0
  },
  {
    titulo: "Vingadores: Ultimato",
    diretor: "Anthony Russo, Joe Russo",
    ano: 2019,
    genero: "Ação, Ficção Científica",
    descricao: "Após Thanos eliminar metade dos seres vivos do universo, os Vingadores se reúnem para tentar reverter o snap e restaurar a ordem no cosmos.",
    imagem: "/vingadores-ultimato.png",
    destaque: 1
  }
];

routes.get("/listar", (request, response) => {
    response.status(200).json(movies);
});

export default routes;