import express from "express";

const routes = express.Router();

export const movies = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014,
    nota: 9.0,
  },
  {
    id: 2,
    titulo: "Velozes e Furiosos",
    genero: "Ação",
    ano: 2001,
    nota: 7.0,
  },
  {
    id: 3,
    titulo: "Batman",
    genero: "Ação",
    ano: 2022,
    nota: 8.5,
  },
];


export default routes;
