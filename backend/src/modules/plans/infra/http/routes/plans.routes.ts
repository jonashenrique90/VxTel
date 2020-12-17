import { Router } from 'express';
// import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository';
import { getCustomRepository } from 'typeorm';
import CreatePlanService from '@modules/plans/services/CreatePlanService';

const plansRouter = Router();


plansRouter.get('/', async (request, response) => {
    const plansRepository = getCustomRepository(PlansRepository);
    const plans = await plansRepository.find();
    return response.json(plans);
});


plansRouter.post('/', async (request, response) => {
    try {
        const { name, free_min } = request.body;
        const createPlan = new CreatePlanService();
        const plan = await createPlan.execute({
            name,
            free_min,
        });
        
        return response.json(plan);
    } catch(err) {
        return response.status(400).json({ error: err.message });
    }
});

export default plansRouter;