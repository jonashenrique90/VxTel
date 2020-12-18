import { Router } from 'express';
import PlansController from '../controllers/PlansController';

const plansRouter = Router();
const plansController = new PlansController();


// plansRouter.get('/', async (request, response) => {
//     const plans = await plansRepository.find();
//     return response.json(plans);
// });


plansRouter.post('/', plansController.create);

export default plansRouter;