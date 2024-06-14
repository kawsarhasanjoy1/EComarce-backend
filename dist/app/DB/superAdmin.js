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
const constance_1 = require("../constance/constance");
const modal_1 = __importDefault(require("../modules/user/modal"));
const superUser = {
    name: "Md Kawsar",
    email: "kawsarhasanjoy342@gmail.com",
    role: constance_1.USER_ROLE.superAdmin,
    password: "123456",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
};
const superAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const isExistsUser = yield modal_1.default.findOne({ role: constance_1.USER_ROLE.superAdmin });
    if (!isExistsUser) {
        yield modal_1.default.create(superUser);
    }
});
exports.default = superAdmin;
