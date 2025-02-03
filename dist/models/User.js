"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.USER_SCHEMA = void 0;
const mongoose_1 = require("mongoose");
exports.USER_SCHEMA = new mongoose_1.Schema({
    email: String,
    password: String,
    phoneNumber: Number,
    address: String,
    role: String,
    orderedFoods: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    ttl: Date,
    isVerified: Boolean,
}, { timestamps: true });
const UserModel = (0, mongoose_1.model)('User', exports.USER_SCHEMA);
exports.UserModel = UserModel;
