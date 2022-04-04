"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("./database/mongodb"));
const express_1 = __importDefault(require("express"));
const Constants_1 = __importDefault(require("./config/Constants"));
const UrlController_1 = __importDefault(require("./controllers/UrlController"));
const api = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
api.use(body_parser_1.default.urlencoded({ extended: true }));
api.use(express_1.default.json());
const urlController = new UrlController_1.default();
const database = new mongodb_1.default();
database.connect();
api.listen(Constants_1.default.PORT, () => {
    console.log(`Server running at ${Constants_1.default.API_URL}:${Constants_1.default.PORT}`);
});
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
//# sourceMappingURL=index.js.map