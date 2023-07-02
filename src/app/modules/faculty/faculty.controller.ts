import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { IFaculty } from "./faculty.interface";
import httpStatus from "http-status";
import { pick } from "../../../shared/pick";
import { facultyFilterableFields } from "./faculty.constant";
import { paginationFields } from "../../../constants/pagination";
import {
  deleteFacultyFromDB,
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFacultyToDB,
} from "./faculty.service";

export const getSingleFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getSingleFacultyFromDB(id);

    sendResponse<IFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Faculty fetched successfully !",
      data: result,
    });
  }
);

export const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await getAllFacultyFromDB(filters, paginationOptions);

  sendResponse<IFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculties fetched successfully !",
    meta: result.meta,
    data: result.data,
  });
});

export const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await updateFacultyToDB(id, updatedData);

  sendResponse<IFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty updated successfully !",
    data: result,
  });
});

export const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteFacultyFromDB(id);

  sendResponse<IFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty deleted successfully !",
    data: result,
  });
});
