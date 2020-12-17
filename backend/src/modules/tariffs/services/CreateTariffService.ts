import { injectable, inject } from 'tsyringe';
import ITariffsRepository from '../repositories/ITariffsRepository';
import Tariff from '@modules/tariffs/infra/typeorm/entities/Tariff';

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

        
        const tariff = await this.tariffsRepository.create({
            origin,
            destiny,
            tax
        });

        return tariff;
    }
}

export default CreateTariffService;