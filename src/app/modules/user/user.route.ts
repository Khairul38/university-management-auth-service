import express from "express";
import { createStudent, createFaculty, createAdmin } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAdminZodSchema,
  createFacultyZodSchema,
  createStudentZodSchema,
} from "./user.validation";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(createStudentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  createStudent
);
router.post(
  "/create-faculty",
  validateRequest(createFacultyZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  createFaculty
);
router.post(
  "/create-admin",
  validateRequest(createAdminZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  createAdmin
);

export const UserRoutes = router;
