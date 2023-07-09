import express from "express";
import { updateAdminZodSchema } from "./admin.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
  getAllAdmin,
} from "./admin.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  getSingleAdmin
);

router.patch(
  "/:id",
  validateRequest(updateAdminZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  updateAdmin
);

router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN), deleteAdmin);

router.get(
  "/",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  getAllAdmin
);

export const AdminRoutes = router;
