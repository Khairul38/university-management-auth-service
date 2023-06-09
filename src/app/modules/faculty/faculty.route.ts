import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { updateFacultyZodSchema } from "./faculty.validation";
import {
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  getAllFaculty,
} from "./faculty.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get(
  "/:id",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY
  ),
  getSingleFaculty
);

router.patch(
  "/:id",
  validateRequest(updateFacultyZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  updateFaculty
);

router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN), deleteFaculty);

router.get(
  "/",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY
  ),
  getAllFaculty
);

export const FacultyRoutes = router;
