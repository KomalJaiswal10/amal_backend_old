"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const init_1 = __importDefault(require("./configs/database/init"));
const route_1 = __importDefault(require("./routes/route"));
(0, init_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || '8000';
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', route_1.default);
app.listen(port, () => console.log(`server started at port ${port}`));
