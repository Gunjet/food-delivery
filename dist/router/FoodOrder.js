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
exports.foodOrderRouter = void 0;
const express_1 = require("express");
const FoodOrder_1 = require("../models/FoodOrder");
exports.foodOrderRouter = (0, express_1.Router)();
exports.foodOrderRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodOrder = yield FoodOrder_1.FoodOrderModel.find({});
    res.json(foodOrder);
}));
exports.foodOrderRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = yield FoodOrder_1.FoodOrderModel.create({
        food: req.body.food,
        quantity: req.body.quantity,
    });
    res.json(newOrder);
}));
exports.foodOrderRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield FoodOrder_1.FoodOrderModel.findByIdAndUpdate(req.params.id, {
        food: req.body.food,
        quantity: req.body.quantity,
    }, { new: true });
    res.json(updatedOrder);
}));
exports.foodOrderRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedOrder = yield FoodOrder_1.FoodOrderModel.findByIdAndDelete(req.params.id);
    res.json(deletedOrder);
}));
