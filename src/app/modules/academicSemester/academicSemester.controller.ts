import { Request, Response } from 'express';
import {
  createAcademicSemesterToDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateSingleAcademicSemesterToDB,
  deleteSingleAcademicSemesterFromDB,
} from './academicSemester.service';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import { pick } from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

export const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;
    const result = await createAcademicSemesterToDB(academicSemesterData);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  }
);

export const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicSemesterFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await getAllAcademicSemesterFromDB(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semesters retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await getSingleAcademicSemesterFromDB(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester retrieved successfully',
      data: result,
    });
  }
);

export const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await updateSingleAcademicSemesterToDB(id, updatedData);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester updated successfully',
      data: result,
    });
  }
);

export const deleteSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await deleteSingleAcademicSemesterFromDB(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester deleted successfully',
      data: result,
    });
  }
);

// export const createAcademicSemester: RequestHandler = async (
//   req,
//   res,
//   next
// ) => {
//   try {
//     const { ...academicSemesterData } = req.body;
//     const result = await createAcademicSemesterToDB(academicSemesterData);
//     res.status(200).json({
//       success: true,
//       message: 'Academic semester created successfully',
//       data: result,
//     });
//   } catch (error) {
//     // res.status(400).json({
//     //   success: false,
//     //   message: 'Failed to create user',
//     // });
//     next(error);
//   }
// };
