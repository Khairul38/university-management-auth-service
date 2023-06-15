import express, { Application } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
// Application Routes
import routers from './app/routes';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.use('/api/v1/users', usersRoutes);
// app.use('/api/v1/academic-semesters', academicSemesterRoutes);
app.use('/api/v1', routers);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// });

// Global error handler
app.use(globalErrorHandler);

export default app;
