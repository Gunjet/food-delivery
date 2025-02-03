"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderStatusEnumModel = exports.FOOD_ORDER_STATUS_ENUM_SCHEMA = void 0;
const mongoose_1 = require("mongoose");
exports.FOOD_ORDER_STATUS_ENUM_SCHEMA = new mongoose_1.Schema({
    type: String,
    enum: ['PENDING', 'CANCELED', 'DELIVERED'],
    default: 'PENDING'
}, { timestamps: true });
const FoodOrderStatusEnumModel = (0, mongoose_1.model)('FoodOrderStatusEnum', exports.FOOD_ORDER_STATUS_ENUM_SCHEMA);
exports.FoodOrderStatusEnumModel = FoodOrderStatusEnumModel;
