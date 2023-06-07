import express, { Application } from 'express';
import cors from 'cors';
// Application Routes
import usersRoutes from './app/modules/users/users.route';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/users/', usersRoutes);

export default app;
