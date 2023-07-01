import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { IAcademicDepartment } from './academicDepartment.interface';
import httpStatus from 'http-status';
import { pick } from '../../../shared/pick';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import { paginationFields } from '../../../constants/pagination';
import {
  createAcademicDepartmentToDB,
  deleteAcademicDepartmentFromDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentToDB,
} from './academicDepartment.service';

export const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body;
    const result = await createAcademicDepartmentToDB(academicDepartmentData);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department created successfully',
      data: result,
    });
  }
);

export const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await getSingleAcademicDepartmentFromDB(id);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department fetched successfully',
      data: result,
    });
  }
);

export const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await getAllAcademicDepartmentFromDB(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic departments fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await updateAcademicDepartmentToDB(id, req.body);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department updated successfully',
      data: result,
    });
  }
);

export const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await deleteAcademicDepartmentFromDB(id);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department deleted successfully',
      data: result,
    });
  }
);
