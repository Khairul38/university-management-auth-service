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

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(createAcademicFacultyZodSchema),
  createAcademicFaculty
);

router.get("/:id", getSingleAcademicFaculty);

router.patch(
  "/:id",
  validateRequest(updateAcademicFacultyZodSchema),
  updateAcademicFaculty
);

router.delete("/:id", deleteSingleAcademicFaculty);

router.get("/", getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;
