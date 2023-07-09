import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  changePasswordZodSchema,
  loginZodSchema,
  refreshTokenZodSchema,
} from "./auth.validation";
import { loginUser, refreshToken, changePassword } from "./auth.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/login", validateRequest(loginZodSchema), loginUser);

router.post(
  "/refresh-token",
  validateRequest(refreshTokenZodSchema),
  refreshToken
);

router.post(
  "/change-password",
  validateRequest(changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  changePassword
);

export const AuthRoutes = router;
