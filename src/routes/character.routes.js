//RUTAS  -- API
import express from "express";
const router = express.Router();

//importo los los controladores y sus validaciones de la carpeta ./src/controllers/characters.controller.js
import {
  crearPersonajes,
  traerTodosLosPJ,
  traePersonajesXid,
  actualizarPersonaje,
  eliminarPersonaje,
} from "../controllers/character.controller.js";


//Creo las rutas con sus métodos 
router.post("/characters/", crearPersonajes);
router.get("/characters/", traerTodosLosPJ);
router.get("/characters/:id", traePersonajesXid);
router.put("/characters/:id", actualizarPersonaje);
router.delete("/characters/:id", eliminarPersonaje);

//exporto las rutas
export default router;