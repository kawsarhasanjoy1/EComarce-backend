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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsync_1 = __importDefault(require("../../shared/utils/catchAsync"));
const config_1 = __importDefault(require("../../config/config"));
const modal_1 = __importDefault(require("../modules/user/modal"));
const auth = (...Role) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("Unauthorize user");
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token);
        console.log(decoded);
        const { id, email, role, iat } = decoded;
        const userName = yield modal_1.default.findOne({ _id: id });
        const userEmail = yield modal_1.default.findOne({ email });
        if (!userName) {
            throw new Error("Unauthorize user");
        }
        if (!userEmail) {
            throw new Error("Unauthorize user check your email");
        }
        if (Role && !Role.includes(role)) {
            throw new Error("Unauthorize user");
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
