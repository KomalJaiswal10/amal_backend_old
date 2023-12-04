import express from "express";
import userController from "../controller/user";

const router = express.Router();

router.post('/', userController.create);

export default router;