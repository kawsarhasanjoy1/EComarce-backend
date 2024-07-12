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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const modal_1 = __importDefault(require("../addProduct/modal"));
const modal_2 = __importDefault(require("../review/modal"));
const modal_3 = __importDefault(require("../user/modal"));
const modal_4 = __importDefault(require("./modal"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_4.default.create(payload);
    return result;
});
const findDataFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield modal_4.default.find();
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
const findSingleDataFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_4.default.findById(id).populate("userId");
    return result;
});
const findDataWithEmailFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_4.default.findOne({ email })
        .populate("userId")
        .populate("productId");
    return result;
});
const findUserStatsFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield modal_4.default.find({ email }).populate("productId");
    const totalPrice = order.reduce((acc, obj) => acc + obj.price, 0);
    const totalOrder = order.reduce((acc, obj) => acc + obj.quantity, 0);
    const review = yield modal_2.default.find().populate("userId");
    const totalReview = review === null || review === void 0 ? void 0 : review.filter((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.userId) === null || _a === void 0 ? void 0 : _a.email) === email; }).length;
    return {
        totalPrice,
        totalOrder,
        totalReview,
    };
});
const findAdminStatsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield modal_4.default.find().populate("productId");
    const orderDetails = yield modal_4.default.aggregate([
        { $unwind: "$productId" },
        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productDetails",
            },
        },
        { $unwind: "$productDetails" },
        {
            $group: {
                _id: "$productDetails.category",
                count: { $sum: 1 },
                totalPrice: { $sum: "$productDetails.price" }, // Aggregate sum of product prices
            },
        },
    ]);
    console.log(orderDetails);
    const totalOrder = order === null || order === void 0 ? void 0 : order.reduce((acc, cur) => acc + (cur === null || cur === void 0 ? void 0 : cur.quantity), 0);
    const totalPrice = order === null || order === void 0 ? void 0 : order.reduce((acc, cur) => acc + (cur === null || cur === void 0 ? void 0 : cur.price), 0);
    const totalProduct = yield modal_1.default.estimatedDocumentCount();
    const totalUser = yield modal_3.default.estimatedDocumentCount();
    const totalReview = yield modal_2.default.estimatedDocumentCount();
    return {
        order,
        orderDetails,
        totalOrder,
        totalUser,
        totalReview,
        totalPrice,
        totalProduct,
    };
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = modal_4.default.findByIdAndDelete(id);
    return result;
});
exports.OrderService = {
    createOrder,
    findDataFromDb,
    findSingleDataFromDb,
    findDataWithEmailFromDb,
    findUserStatsFromDb,
    findAdminStatsFromDb,
    deleteOrder,
};
