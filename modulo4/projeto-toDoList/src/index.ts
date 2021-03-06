import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { pegaListaUsuarios } from "./endpoints/pegaListaUsuarios";
import { pegaTarefas } from "./endpoints/pegaTarefas";
import { pegarUsuariosResponsaveisPorUmaTarefa } from "./endpoints/pegarUsuariosResponsaveisPorUmaTarefa";
import { adicionarUsuarioResponsavelAUmaTarefa } from "./endpoints/adicionaUsuarioResponsavelAUmaTarefa";
import { editaApelidoDoUsuario } from "./endpoints/editaApelidoDoUsuario";
import { editaStatusDeUmaTarefa } from "./endpoints/editaStatusDeUmaTarefa";
import { deletaTarefa } from "./endpoints/deletaTarefa";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!

app.get("/users", pegaListaUsuarios)

app.get("/tasks", pegaTarefas)

app.get("/tasks/:taskId/users", pegarUsuariosResponsaveisPorUmaTarefa)

app.post("/tasks/:taskId/users", adicionarUsuarioResponsavelAUmaTarefa)

app.put("/users/:userId", editaApelidoDoUsuario)

app.put("/tasks/:taskId", editaStatusDeUmaTarefa)

app.delete("/tasks/:taskId", deletaTarefa)