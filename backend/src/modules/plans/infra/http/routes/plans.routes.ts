import { Router } from 'express';
import PlansController from '../controllers/PlansController';

const plansRouter = Router();
const plansController = new PlansController();


plansRouter.get('/', plansController.index);


plansRouter.post('/', plansController.create);

export default plansRouter;