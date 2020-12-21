import { Request, Response} from 'express';
import { container } from 'tsyringe';
import CreateTariffService from '@modules/tariffs/services/CreateTariffService';

export default class TariffsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { origin, destiny, tax } = request.body;
    
        const createTariff = container.resolve(CreateTariffService);
        const tariff = await createTariff.execute({
            origin,
            destiny,
            tax,
        });
            
        return response.json(tariff);

    }
}