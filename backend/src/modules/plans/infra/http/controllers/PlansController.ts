import { Request, Response} from 'express';
import { container } from 'tsyringe';
import CreatePlanService from '@modules/plans/services/CreatePlanService';

export default class PlansController {
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