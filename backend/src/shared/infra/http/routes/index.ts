import { Router } from 'express';
import tariffsRouter from '@modules/tariffs/infra/http/routes/tariffs.routes';
import plansRouter from '@modules/plans/infra/http/routes/plans.routes';
import descountRouter from '@modules/tariffs/infra/http/routes/descount.routes';

const routes = Router();

routes.use('/tariffs', tariffsRouter);
routes.use('/plans', plansRouter);
routes.use('/descount', descountRouter);


export default routes;