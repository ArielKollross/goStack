// src/routes/index.ts
import { Router } from 'express';
import appintmentsRouter from './appointments.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use(('/appintments'), appointmentsRouter );

export default routes;