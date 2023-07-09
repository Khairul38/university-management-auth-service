import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema,
} from "./academicFaculty.validation";
import {
  createAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteSingleAcademicFaculty,
  getAllAcademicFaculty,
} from "./academicFaculty.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(createAcademicFacultyZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  createAcademicFaculty
);

router.get(
  "/:id",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY
  ),
  getSingleAcademicFaculty
);

router.patch(
  "/:id",
  validateRequest(updateAcademicFacultyZodSchema),
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY
  ),
  updateAcademicFaculty
);

router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  deleteSingleAcademicFaculty
);

router.get(
  "/",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY
  ),
  getAllAcademicFaculty
);

export const AcademicFacultyRoutes = router;
