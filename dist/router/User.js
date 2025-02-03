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
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = require("../models/User");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.UserModel.find({});
    res.json(status);
}));
exports.userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield User_1.UserModel.create({
        enum: req.body.enum,
    });
    res.json(newUser);
}));
exports.userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield User_1.UserModel.findByIdAndUpdate(req.params.id, {
        enum: req.body.enum,
    }, { new: true });
    res.json(updatedUser);
}));
exports.userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield User_1.UserModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
}));
