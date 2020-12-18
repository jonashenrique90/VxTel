import { Request, Response} from 'express';
import { container } from 'tsyringe';
import FindDescountService from '@modules/tariffs/services/FindDescountService';

export default class DescountsController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const {origin, destiny, minutes, idPlan } = request.query;   
        
            const min = parseInt(minutes);
            const descount = container.resolve(FindDescountService);
            const plan = await descount.execute({
                origin,
                destiny,
                min,
                idPlan,
            });
            
            return response.json(plan);
        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
    }
}