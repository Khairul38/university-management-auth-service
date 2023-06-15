import { NextFunction, Request, Response } from 'express';
import { createAcademicSemesterToDB } from './academicSemester.service';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

export const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await createAcademicSemesterToDB(academicSemesterData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });

    next();

    // res.status(200).json({
    //   success: true,
    //   message: 'Academic semester created successfully',
    //   data: result,
    // });
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
