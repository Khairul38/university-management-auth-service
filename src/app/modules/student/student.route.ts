import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { updateStudentZodSchema } from "./student.validation";
import {
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getAllStudent,
} from "./student.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get(
  "/:id",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  getSingleStudent
);

router.patch(
  "/:id",
  validateRequest(updateStudentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  updateStudent
);

router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN), deleteStudent);

router.get(
  "/",
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  getAllStudent
);

export const StudentRoutes = router;
