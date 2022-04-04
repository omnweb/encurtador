import MongoConnection from "./database/mongodb";
import express from "express";
import config from "./config/Constants";
import UrlController from "./controllers/UrlController";

const api = express();
import bodyParser from "body-parser";

api.use(bodyParser.urlencoded({ extended: true }));

api.use(express.json());

const urlController = new UrlController();
const database = new MongoConnection();
database.connect();

api.listen(config.PORT, () => {
  console.log(`Server running at ${config.API_URL}:${config.PORT}`);
});

api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
