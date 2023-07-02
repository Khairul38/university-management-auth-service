import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createManagementDepartmentZodSchema,
  updateManagementDepartmentZodSchema,
} from "./managementDepartment.validation";
import {
  createManagementDepartment,
  getSingleManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment,
  getAllManagementDepartment,
} from "./managementDepartment.controller";

const router = express.Router();

router.post(
  "/create-department",
  validateRequest(createManagementDepartmentZodSchema),
  createManagementDepartment
);

router.get("/:id", getSingleManagementDepartment);

router.patch(
  "/:id",
  validateRequest(updateManagementDepartmentZodSchema),
  updateManagementDepartment
);

router.delete("/:id", deleteManagementDepartment);

router.get("/", getAllManagementDepartment);

export const ManagementDepartmentRoutes = router;
