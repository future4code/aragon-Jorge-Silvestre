import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createPerfume } from "./endpoints/createPerfume";
import { getPerfumes } from "./endpoints/getPerfumes";
import { editPerfumePrice } from "./endpoints/editPerfumePrice";
import { deletePerfumes } from "./endpoints/deletePerfumes";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfume", createPerfume)

app.get("/perfume", getPerfumes)

app.put("/perfumes/:id", editPerfumePrice)

app.delete("/perfumes/:id", deletePerfumes)