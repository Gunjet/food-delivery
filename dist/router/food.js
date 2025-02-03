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
exports.foodRouter = void 0;
const express_1 = require("express");
const Food_1 = require("../models/Food");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allFoods = yield Food_1.FoodModel.find({});
    res.json(allFoods);
}));
exports.foodRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newFood = yield Food_1.FoodModel.create({
        foodName: req.body.foodName,
        category: req.body.category,
        image: req.body.image,
        ingredients: req.body.ingredients,
        price: req.body.price
    });
    res.json(newFood);
}));
exports.foodRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield Food_1.FoodModel.findByIdAndUpdate(req.params.id, {
        foodName: req.body.foodName,
        category: req.body.category,
        image: req.body.image,
        ingredients: req.body.ingredients,
        price: req.body.price
    }, { new: true });
    res.json(updatedItem);
}));
exports.foodRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield Food_1.FoodModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
}));
