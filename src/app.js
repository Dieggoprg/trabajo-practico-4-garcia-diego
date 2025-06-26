import express from "express";
const app = express();
app.use(express.json()) //le permite al servidor leer el json que viene en la petición

import "dotenv/config";