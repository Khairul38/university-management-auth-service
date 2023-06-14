import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterModel';

export const createAcademicSemesterToDB = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const createdSemester = await AcademicSemester.create(payload);
  return createdSemester;
};
