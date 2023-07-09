import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
} from "./academicDepartment.validation";
import {
  createAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
  getAllAcademicDepartment,
} from "./academicDepartment.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post(
  "/create-department",
  validateRequest(createAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  createAcademicDepartment
);

router.get(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  getSingleAcademicDepartment
);

router.patch(
  "/:id",
  validateRequest(updateAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  updateAcademicDepartment
);

router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  deleteAcademicDepartment
);

router.get(
  "/",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  getAllAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
