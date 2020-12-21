import { injectable, inject } from 'tsyringe';
import ITariffsRepository from '../repositories/ITariffsRepository';
import Tariff from '@modules/tariffs/infra/typeorm/entities/Tariff';
import AppError from '@shared/errors/AppError';

interface RequestDTO {
    origin: string;
    destiny: string;
    tax: number;
}

@injectable()
class CreateTariffService {
    constructor(
        @inject('TariffsRepository')
        private tariffsRepository: ITariffsRepository,
    ) {}
    
    public async execute({origin, destiny, tax }: RequestDTO): Promise<Tariff> {

        if(tax < 0) {
            throw new AppError("Tax cannot be less than zero.")
        }

        const tariff = await this.tariffsRepository.findByOriginAndDestiny(origin, destiny);
        if(tariff) {
            throw new AppError("Tariff already exists for these parameters!");
        } else {
            const newTariff = await this.tariffsRepository.create({
                origin,
                destiny,
                tax
            });
    
            return newTariff;            
        }
        
    }
}

export default CreateTariffService;