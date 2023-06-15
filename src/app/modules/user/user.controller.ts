import { NextFunction, Request, Response } from 'express';
import { createUserToDB } from './user.service';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...user } = req.body;
    const result = await createUserToDB(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });

    next();

    // res.status(200).json({
    //   success: true,
    //   message: 'User created successfully',
    //   data: result,
    // });
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
