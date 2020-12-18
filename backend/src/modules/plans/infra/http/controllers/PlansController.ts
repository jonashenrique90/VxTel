import { Request, Response} from 'express';
import { container } from 'tsyringe';
import CreatePlanService from '@modules/plans/services/CreatePlanService';
import ListPlansService from '@modules/plans/services/ListPlansService';

export default class PlansController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listPlans = container.resolve(ListPlansService);
        const plans = await listPlans.execute();
        return response.json(plans);
    }
    
    public async create(request: Request, response: Response): Promise <Response> {
        try {
            const { name, free_min } = request.body;
            const createPlan = container.resolve(CreatePlanService);
            const plan = await createPlan.execute({
                name,
                free_min,
            });
            
            return response.json(plan);
        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
    }
}