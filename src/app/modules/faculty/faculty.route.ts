import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { updateFacultyZodSchema } from "./faculty.validation";
import {
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  getAllFaculty,
} from "./faculty.controller";

const router = express.Router();

router.get("/:id", getSingleFaculty);

router.patch("/:id", validateRequest(updateFacultyZodSchema), updateFaculty);

router.delete("/:id", deleteFaculty);

router.get("/", getAllFaculty);

export const FacultyRoutes = router;
