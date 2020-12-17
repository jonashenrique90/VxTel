import { Router } from 'express';
import { container } from 'tsyringe';
import CreateTariffService from '@modules/tariffs/services/CreateTariffService';

const tariffsRouter = Router();


// tariffsRouter.get('/', async (request, response) => {
    
//     const tariffs = await tariffsRepository.find();
//     return response.json(tariffs);
// });


tariffsRouter.post('/', async (request, response) => {
    try {
        const { origin, destiny, tax } = request.body;

        const createTariff = container.resolve(CreateTariffService);
        const tariff = await createTariff.execute({
            origin,
            destiny,
            tax,
        });
        
        return response.json(tariff);
    } catch(err) {
        return response.status(400).json({ error: err.message });
    }
});

export default tariffsRouter;