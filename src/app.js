import express from "express";
const app = express();
app.use(express.json()) //le permite al servidor leer el json que viene en la petición

import "dotenv/config";
import router from "./routes/character.routes.js";
import { startDB } from "./config/database.js";


const PORT = process.env.PORT;

app.use("/api", router);

startDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("running server...⛷️⛷️");
    })
})