import { Request, RequestHandler, Response } from "express";
import {
  createAdminToDB,
  createFacultyToDB,
  createStudentToDB,
} from "./user.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IUser } from "./user.interface";

export const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;
    const result = await createStudentToDB(student, userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  }
);

export const createFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { faculty, ...userData } = req.body;
    const result = await createFacultyToDB(faculty, userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Faculty created successfully!",
      data: result,
    });
  }
);

export const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...userData } = req.body;
    const result = await createAdminToDB(admin, userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin created successfully!",
      data: result,
    });
  }
);

// export const createUser: RequestHandler = async (req, res, next) => {
//   try {
//     const { ...user } = req.body;
//     const result = await createUserToDB(user);
//     res.status(200).json({
//       success: true,
//       message: 'User created successfully',
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
