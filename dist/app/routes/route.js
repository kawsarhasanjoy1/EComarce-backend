"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("../modules/user/route"));
const route_2 = __importDefault(require("../modules/addProduct/route"));
const route_3 = __importDefault(require("../modules/review/route"));
const route_4 = __importDefault(require("../modules/order/route"));
const route_5 = __importDefault(require("../modules/auth/route"));
const route_6 = __importDefault(require("../modules/payment/route"));
const router = (0, express_1.Router)();
const RoutePath = [
    {
        path: "/api/v1",
        route: route_1.default,
    },
    {
        path: "/api/v1",
        route: route_2.default,
    },
    {
        path: "/api/v1",
        route: route_3.default,
    },
    {
        path: "/api/v1",
        route: route_4.default,
    },
    {
        path: "/api/v1",
        route: route_5.default,
    },
    {
        path: "/api/v1",
        route: route_6.default,
    },
];
RoutePath.map((route) => router.use(route.path, route.route));
exports.default = router;
