import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { IStudent } from "./student.interface";
import httpStatus from "http-status";
import { pick } from "../../../shared/pick";
import { studentFilterableFields } from "./student.constant";
import { paginationFields } from "../../../constants/pagination";
import {
  deleteStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentToDB,
} from "./student.service";

export const getSingleStudent = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await getSingleStudentFromDB(id);

    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student fetched successfully !",
      data: result,
    });
  }
);

export const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await getAllStudentFromDB(filters, paginationOptions);

  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students fetched successfully !",
    meta: result.meta,
    data: result.data,
  });
});

export const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await updateStudentToDB(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student updated successfully !",
    data: result,
  });
});

export const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await deleteStudentFromDB(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student deleted successfully !",
    data: result,
  });
});
