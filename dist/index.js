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
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const FoodCategory_1 = require("./router/FoodCategory");
const Food_1 = require("./router/Food");
const PORT = 4001;
const app = (0, express_1.default)();
// const {verifytoken} = require("@clerk/backend")
app.use(express_1.default.json());
app.use(cors());
(0, dotenv_1.configDotenv)();
const connectMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const MONGODB_URI = process.env.MONGODB_URI;
    yield mongoose_1.default.connect(MONGODB_URI);
    console.log('db-tai holbogdloo');
});
connectMongoDB();
app.use('/food-category/', FoodCategory_1.foodCategoryRouter);
app.use('/food/', Food_1.foodRouter);
app.listen(PORT, () => console.log("aslaa"));
