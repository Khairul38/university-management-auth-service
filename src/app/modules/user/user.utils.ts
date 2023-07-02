/* eslint-disable no-undefined */
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

// Student ID
const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({ role: "student" }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

// Faculty ID
const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: "faculty" }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

//Admin ID
const findLastAdminId = async (): Promise<string | undefined> => {
  const lastAdmin = await User.findOne({ role: "admin" }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

// auto generated incremental id
export const generateStudentId = async (
  academicSemester: IAcademicSemester
): Promise<string> => {
  const currentId = (await findLastStudentId()) || String(0).padStart(5, "0");

  // increment by 1
  let incrementedId = (Number(currentId) + 1).toString().padStart(5, "0");

  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`;

  return incrementedId;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentId = (await findLastFacultyId()) || String(0).padStart(5, "0");

  // increment by 1
  let incrementedId = (Number(currentId) + 1).toString().padStart(5, "0");

  incrementedId = `F-${incrementedId}`;

  return incrementedId;
};

export const generateAdminId = async (): Promise<string> => {
  const currentId = (await findLastAdminId()) || String(0).padStart(5, "0");

  // increment by 1
  let incrementedId = (Number(currentId) + 1).toString().padStart(5, "0");

  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};
