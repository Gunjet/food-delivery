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
exports.foodOrderItemRouter = void 0;
const express_1 = require("express");
const FoodOrderItem_1 = require("../models/FoodOrderItem");
exports.foodOrderItemRouter = (0, express_1.Router)();
exports.foodOrderItemRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderItems = yield FoodOrderItem_1.FoodOrderItemModel.find({});
    res.json(orderItems);
}));
exports.foodOrderItemRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItems = yield FoodOrderItem_1.FoodOrderItemModel.create({
        food: req.body.food,
        quantity: req.body.quantity,
    });
    res.json(newItems);
}));
exports.foodOrderItemRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield FoodOrderItem_1.FoodOrderItemModel.findByIdAndUpdate(req.params.id, {
        food: req.body.food,
        quantity: req.body.quantity,
    }, { new: true });
    res.json(updatedItem);
}));
exports.foodOrderItemRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield FoodOrderItem_1.FoodOrderItemModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
}));
