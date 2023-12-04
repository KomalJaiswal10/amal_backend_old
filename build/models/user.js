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
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const db_1 = __importDefault(require("../configs/database/db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    id: {
        type: sequelize_2.default.UUID,
        defaultValue: sequelize_2.default.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    is_number_verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_super_admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    is_user: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
}, {
    sequelize: db_1.default,
    timestamps: true,
    tableName: 'users',
    freezeTableName: true
});
UserModel.beforeCreate((user) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = bcryptjs_1.default.genSaltSync(10);
    user.password = bcryptjs_1.default.hashSync(user.password, salt);
}));
exports.default = UserModel;
