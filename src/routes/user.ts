import express from "express";
import userController from "../controller/user";

const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.findAll);

export default router;