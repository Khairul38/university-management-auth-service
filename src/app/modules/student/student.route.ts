import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { updateStudentZodSchema } from "./student.validation";
import {
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getAllStudent,
} from "./student.controller";

const router = express.Router();

router.get("/:id", getSingleStudent);

router.patch("/:id", validateRequest(updateStudentZodSchema), updateStudent);

router.delete("/:id", deleteStudent);

router.get("/", getAllStudent);

export const StudentRoutes = router;
