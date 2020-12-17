import { Router } from 'express';
import FindDescountService from '@modules/tariffs/services/FindDescountService';

const descountRouter = Router();

descountRouter.get('/', async (request, response) => {
    try {
        const {origin, destiny, minutes, idPlan } = request.query;   
    
        const min = parseInt(minutes);
        const descount = new FindDescountService();
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
});

export default descountRouter;