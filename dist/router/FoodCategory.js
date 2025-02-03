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
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const FoodCategory_1 = require("../models/FoodCategory");
const backend_1 = require("@clerk/backend");
// import { verifyToken } from "@clerk/backend/dist/tokens/verify";
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield FoodCategory_1.FoodCategoryModel.find();
    res.json(foodCategories);
}));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.get('authentication');
    try {
        const verified = yield (0, backend_1.verifyToken)(token, {
            secretKey: process.env.CLERK_SECRET_KEY
        });
        console.log({ verified });
        const foodCategories = yield FoodCategory_1.FoodCategoryModel.find();
        res.json(foodCategories);
        next();
    }
    catch (_a) {
        res.json({ status: "Forbidden" });
    }
});
// foodCategoryRouter.get('/FoodMenu', auth, async (req: Request, res: Response) => {
//   const token = req.get('authentication')
//   try{
//     const verified = await verifyToken( token, {
//       secretKey: process.env.CLERK_SECRET_KEY
//     })
//     console.log({ verified })
//     const foodCategories = await FoodCategoryModel.find();
//     res.json(foodCategories);
//   }
//   catch{
//     res.json({status: "Forbidden"})
//   }
// });
exports.foodCategoryRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield FoodCategory_1.FoodCategoryModel.find();
    res.json(foodCategories);
}));
exports.foodCategoryRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield FoodCategory_1.FoodCategoryModel.create({
        categoryName: req.body.categoryName
    });
    res.json(updatedItem);
}));
exports.foodCategoryRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedItem = yield FoodCategory_1.FoodCategoryModel.findByIdAndUpdate(req.params.id, {
        categoryName: String(req.body.categoryName)
    }, { new: true });
    const foodCategories = yield FoodCategory_1.FoodCategoryModel.find();
    res.json(foodCategories);
}));
exports.foodCategoryRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield FoodCategory_1.FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
}));
