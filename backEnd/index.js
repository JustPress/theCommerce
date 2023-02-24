import mongoose from "mongoose";
import express from "express";
import router from "./routers/router.js";

const app = express();
const PORT = 9234;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://victormorel:28fc7d775421f24506ab185f85bf1922@mongodb.3wa.io:27017/victormorel?authSource=admin');

mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
});

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de données établie");
    app.use('/', router);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://victormorel.ide.3wa.io:${PORT}`);
});