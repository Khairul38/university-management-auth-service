import express, { Application } from 'express';
import cors from 'cors';
// Application Routes
import usersRoutes from './app/modules/users/user.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
// import { ApiError } from './errors/ApiError';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/users', usersRoutes);

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'));
// });

// Global error handler
app.use(globalErrorHandler);

export default app;
