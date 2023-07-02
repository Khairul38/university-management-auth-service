import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { IManagementDepartment } from "./managementDepartment.interface";
import httpStatus from "http-status";
import { pick } from "../../../shared/pick";
import { managementDepartmentFilterableFields } from "./managementDepartment.constant";
import { paginationFields } from "../../../constants/pagination";
import {
  createManagementDepartmentToDB,
  getAllManagementDepartmentFromDB,
  getSingleManagementDepartmentFromDB,
  updateManagementDepartmentToDB,
  deleteManagementDepartmentFromDB,
} from "./managementDepartment.service";

export const createManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...managementDepartmentData } = req.body;
    const result = await createManagementDepartmentToDB(
      managementDepartmentData
    );

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Management department created successfully",
      data: result,
    });
  }
);

export const getAllManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, managementDepartmentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await getAllManagementDepartmentFromDB(
      filters,
      paginationOptions
    );

    sendResponse<IManagementDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Management departments fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  }
);

export const getSingleManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await getSingleManagementDepartmentFromDB(id);

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Management department fetched successfully",
      data: result,
    });
  }
);

export const updateManagementDepartment = catchAsync(
  catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await updateManagementDepartmentToDB(id, updatedData);

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Management department updated successfully",
      data: result,
    });
  })
);

export const deleteManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await deleteManagementDepartmentFromDB(id);

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Management department deleted successfully",
      data: result,
    });
  }
);
