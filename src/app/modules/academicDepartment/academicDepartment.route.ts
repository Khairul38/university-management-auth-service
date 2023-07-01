import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
} from './academicDepartment.validation';
import {
  createAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
  getAllAcademicDepartment,
} from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(createAcademicDepartmentZodSchema),
  createAcademicDepartment
);

router.get('/:id', getSingleAcademicDepartment);

router.patch(
  '/:id',
  validateRequest(updateAcademicDepartmentZodSchema),
  updateAcademicDepartment
);

router.delete('/:id', deleteAcademicDepartment);

router.get('/', getAllAcademicDepartment);

export const AcademicDepartmentRoutes = router;
