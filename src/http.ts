import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "./database";
import { routes } from "./routes";
import path from "path";

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração, update
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica, exemplo: senha de um usuário.
 */

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//testar renderização
app.get("/pages/client", (req, res) => {
  return res.render("html/client.html")
});

const http = createServer(app); // Criando protocolo HTTP
const io = new Server(http); // Criando protocolo de WS

io.on("connection", (socket: Socket) => {
  console.log("Connection established", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io }