"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderModel = void 0;
const mongoose_1 = require("mongoose");
const FoodOrderItem_1 = require("./FoodOrderItem");
const FoodOrderStatusEnum_1 = require("./FoodOrderStatusEnum");
const FOOD_ORDER_SCHEMA = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    totalPrice: Number,
    foodOrderItems: [FoodOrderItem_1.FOOD_ORDER_ITEM_SCHEMA],
    status: FoodOrderStatusEnum_1.FOOD_ORDER_STATUS_ENUM_SCHEMA,
    address: String,
}, { timestamps: true });
const FoodOrderModel = (0, mongoose_1.model)('FoodOrder', FOOD_ORDER_SCHEMA);
exports.FoodOrderModel = FoodOrderModel;
