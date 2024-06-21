import { Router } from "express";
import { check } from "express-validator";
import userController from "../controllers/users-controller";
const router = Router();

router.post(
  "/signup",
  [
    check("name").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  userController.signup
);

router.post("/login", userController.login);
router.get("/login", userController.getCurrentUser);

export default router;
