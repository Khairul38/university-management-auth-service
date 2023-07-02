import express from "express";
import { createStudent, createFaculty, createAdmin } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAdminZodSchema,
  createFacultyZodSchema,
  createStudentZodSchema,
} from "./user.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(createStudentZodSchema),
  createStudent
);
router.post(
  "/create-faculty",
  validateRequest(createFacultyZodSchema),
  createFaculty
);
router.post(
  "/create-admin",
  validateRequest(createAdminZodSchema),
  createAdmin
);

export const UserRoutes = router;
