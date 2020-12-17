import { getRepository, Repository } from 'typeorm';
import ITariffsRepository from '@modules/tariffs/repositories/ITariffsRepository';
import ICreateTariffDTO from '@modules/tariffs/dtos/ICreateTariffDTO';
import Tariff from '../entities/Tariff';

class TariffsRepository implements ITariffsRepository {
    private ormRepository: Repository<Tariff>;

    constructor() {
        this.ormRepository = getRepository(Tariff);
    }
    
    public async findByOriginAndDestiny(origin: string, destiny: string): Promise<Tariff | undefined> {
        const findTariff = await this.ormRepository.findOne({
            where: {
                origin,
                destiny
            }
        });
        return findTariff;
    }

    public async create({ origin, destiny, tax }: ICreateTariffDTO): Promise<Tariff> {
        const tariff = this.ormRepository.create({
            origin,
            destiny,
            tax,
        });
        
        await this.ormRepository.save(tariff);

        return tariff;
    }
}

export default TariffsRepository;