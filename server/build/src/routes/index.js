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
exports.init = void 0;
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const teams_1 = __importDefault(require("./teams"));
const scores_1 = __importDefault(require("./scores"));
const path_1 = require("path");
const init = (app) => {
    const router = express_1.default.Router();
    const apiLimiter = express_rate_limit_1.default({
        windowMs: 3 * 1000,
        max: 3,
    });
    //app.use(apiLimiter);
    app.use("/api/v1/scores", scores_1.default);
    app.use("/api/v1/teams", teams_1.default);
    app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send({ message: "Server running!" });
    }));
    app.get("/images/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const f = { path: path_1.resolve(__dirname, `../images/${req.params.id}_dark.svg`) };
            res.sendFile(f.path);
        }
        catch (error) {
            console.log(error);
        }
    }));
    app.use(router);
};
exports.init = init;
