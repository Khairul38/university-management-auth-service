import { RequestHandler } from 'express';
import { createUserToDB } from './user.service';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await createUserToDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    //   message: 'Failed to create user',
    // });
    next(error);
  }
};
