import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { IAdmin } from "./admin.interface";
import httpStatus from "http-status";
import { pick } from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { paginationFields } from "../../../constants/pagination";
import {
  deleteAdminFromDB,
  getAllAdminFromDB,
  getSingleAdminFromDB,
  updateAdminToDB,
} from "./admin.service";

export const getSingleAdmin = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getSingleAdminFromDB(id);

    sendResponse<IAdmin>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin fetched successfully !",
      data: result,
    });
  }
);

export const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, adminFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await getAllAdminFromDB(filters, paginationOptions);

  sendResponse<IAdmin[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins fetched successfully !",
    meta: result.meta,
    data: result.data,
  });
});

export const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await updateAdminToDB(id, updatedData);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin updated successfully !",
    data: result,
  });
});

export const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await deleteAdminFromDB(id);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin deleted successfully !",
    data: result,
  });
});
