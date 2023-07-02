import express from "express";
import { updateAdminZodSchema } from "./admin.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
  getAllAdmin,
} from "./admin.controller";

const router = express.Router();

router.get("/:id", getSingleAdmin);

router.patch("/:id", validateRequest(updateAdminZodSchema), updateAdmin);

router.delete("/:id", deleteAdmin);

router.get("/", getAllAdmin);

export const AdminRoutes = router;
