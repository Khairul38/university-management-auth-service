import express from 'express';
import usersRoutes from '../modules/user/user.route';
import academicSemesterRoutes from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: usersRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users', usersRoutes);
// router.use('/academic-semesters', academicSemesterRoutes);

export default router;
