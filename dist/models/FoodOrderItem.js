"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderItemModel = exports.FOOD_ORDER_ITEM_SCHEMA = void 0;
const mongoose_1 = require("mongoose");
exports.FOOD_ORDER_ITEM_SCHEMA = new mongoose_1.Schema({
    food: String,
    quantity: Number,
}, { timestamps: true });
const FoodOrderItemModel = (0, mongoose_1.model)('FoodOrderItem', exports.FOOD_ORDER_ITEM_SCHEMA);
exports.FoodOrderItemModel = FoodOrderItemModel;
