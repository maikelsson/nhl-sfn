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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = void 0;
const service_1 = require("./service");
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scores = yield service_1.ScoreService.findOne(req.params.date);
        res.status(200).json({ success: true, data: scores });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.findOne = findOne;
