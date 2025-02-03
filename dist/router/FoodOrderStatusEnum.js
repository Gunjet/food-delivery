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
exports.foodOrderStatusEnumRouter = void 0;
const express_1 = require("express");
const FoodOrderStatusEnum_1 = require("../models/FoodOrderStatusEnum");
exports.foodOrderStatusEnumRouter = (0, express_1.Router)();
exports.foodOrderStatusEnumRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield FoodOrderStatusEnum_1.FoodOrderStatusEnumModel.find({});
    res.json(status);
}));
exports.foodOrderStatusEnumRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newStatus = yield FoodOrderStatusEnum_1.FoodOrderStatusEnumModel.create({
        enum: req.body.enum,
    });
    res.json(newStatus);
}));
exports.foodOrderStatusEnumRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedStatus = yield FoodOrderStatusEnum_1.FoodOrderStatusEnumModel.findByIdAndUpdate(req.params.id, {
        enum: req.body.enum,
    }, { new: true });
    res.json(updatedStatus);
}));
exports.foodOrderStatusEnumRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedStatus = yield FoodOrderStatusEnum_1.FoodOrderStatusEnumModel.findByIdAndDelete(req.params.id);
    res.json(deletedStatus);
}));
