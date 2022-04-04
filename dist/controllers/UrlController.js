"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const Constants_1 = __importDefault(require("../config/Constants"));
const URL_model_1 = require("../models/URL.model");
class URLController {
    shorten(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const url = yield URL_model_1.URLModel.findOne({ originURL });
            if (url) {
                response.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortURL = `${Constants_1.default.API_URL}: ${Constants_1.default.PORT}/${hash}`;
            const newURL = yield URL_model_1.URLModel.create({ hash, shortURL, originURL });
            response.json(newURL);
        });
    }
    redirect(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = yield URL_model_1.URLModel.findOne({ hash });
            if (url) {
                response.redirect(url.originalUrl);
                return;
            }
            response.status(400).json({ error: 'URL not found' });
        });
    }
}
exports.default = URLController;
//# sourceMappingURL=UrlController.js.map