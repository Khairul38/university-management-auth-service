import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
} from './academicSemester.validation';
import {
  createAcademicSemester,
  getSingleAcademicSemester,
  getAllAcademicSemester,
  updateAcademicSemester,
  deleteSingleAcademicSemester,
} from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(createAcademicSemesterZodSchema),
  createAcademicSemester
);

router.get('/:id', getSingleAcademicSemester);

router.patch(
  '/:id',
  validateRequest(updateAcademicSemesterZodSchema),
  updateAcademicSemester
);

router.delete('/:id', deleteSingleAcademicSemester);

router.get('/', getAllAcademicSemester);

export default router;
