import 'dotenv/config';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from '@shared/infra/http/routes';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.tmpFolder));
app.use(routes);
app.use(errors());
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof AppError) {
//     return res.status(err.statusCode).json({
//       status: 'error',
//       message: err.message,
//     });
//   }

//   return res.status(500).json({
//     status: 'error',
//     message: 'Internal server error',
//   });
// });

app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}!`));
