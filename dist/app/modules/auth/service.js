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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const modal_1 = __importDefault(require("../user/modal"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config/config"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield modal_1.default.findOne({ email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User dose not exist!");
    }
    const hashPassword = user === null || user === void 0 ? void 0 : user.password;
    const matchPassword = yield bcrypt_1.default.compare(password, hashPassword);
    if (!matchPassword) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password did not match");
    }
    const userPayload = {
        id: user === null || user === void 0 ? void 0 : user._id,
        name: user === null || user === void 0 ? void 0 : user.name,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = jsonwebtoken_1.default.sign(userPayload, config_1.default.access_token, {
        expiresIn: config_1.default.expireIn,
    });
    return {
        user: userPayload,
        token: token,
    };
});
const changePassword = (user, Password) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistsId = yield modal_1.default.findById(user === null || user === void 0 ? void 0 : user.id);
    if (!isExistsId) {
        throw new Error("Password change failed. Ensure the new password is unique and not among the last 2 used (last used on 2023-01-01 at 12:00 PM)");
    }
    const role = user === null || user === void 0 ? void 0 : user.role;
    const dbRole = isExistsId === null || isExistsId === void 0 ? void 0 : isExistsId.role;
    if (role !== dbRole) {
        throw new Error("don't match role");
    }
    const isPassword = isExistsId === null || isExistsId === void 0 ? void 0 : isExistsId.password;
    const isExistsPassword = yield bcrypt_1.default.compare(Password === null || Password === void 0 ? void 0 : Password.oldPassword, isPassword);
    if (!isExistsPassword) {
        throw new Error("didn't match password");
    }
    const passwordFromDb = isExistsId === null || isExistsId === void 0 ? void 0 : isExistsId.password;
    const password = Password === null || Password === void 0 ? void 0 : Password.newPassword;
    if (password == (Password === null || Password === void 0 ? void 0 : Password.oldPassword)) {
        throw new Error("Password change failed. Ensure the new password is unique and not among the last 2 used (last used on 2023-01-01 at 12:00 PM)");
    }
    const newHashPass = yield bcrypt_1.default.hash(password, Number(10));
    const result = yield modal_1.default.findByIdAndUpdate({ _id: user === null || user === void 0 ? void 0 : user.id }, { password: newHashPass });
    const data = {
        _id: user === null || user === void 0 ? void 0 : user._id,
        username: isExistsId === null || isExistsId === void 0 ? void 0 : isExistsId.name,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    return data;
});
exports.AuthService = {
    loginUser,
    changePassword,
};
