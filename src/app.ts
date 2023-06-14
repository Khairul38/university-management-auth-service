import express, { Application } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
// Application Routes
import usersRoutes from './app/modules/user/user.route';
import academicSemesterRoutes from './app/modules/academicSemester/academicSemester.route';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/academic-semesters', academicSemesterRoutes);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// });

// Global error handler
app.use(globalErrorHandler);

export default app;
