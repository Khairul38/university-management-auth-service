import { RequestHandler } from 'express';
import { createAcademicSemesterToDB } from './academicSemester.service';

export const createAcademicSemester: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await createAcademicSemesterToDB(academicSemesterData);
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
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
