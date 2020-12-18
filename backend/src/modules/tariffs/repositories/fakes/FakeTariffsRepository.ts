import { uuid } from 'uuidv4';
import ITariffsRepository from '@modules/tariffs/repositories/ITariffsRepository';
import ICreateTariffDTO from '@modules/tariffs/dtos/ICreateTariffDTO';
import Tariff from '../../infra/typeorm/entities/Tariff';

class FakeTariffsRepository implements ITariffsRepository {
    private tariffs: Tariff[] = [];
    
    public async findByOriginAndDestiny(origin: string, destiny: string): Promise<Tariff | undefined> {
        const findTariff = this.tariffs.find(tariff => (tariff.origin === origin) && (tariff.destiny === destiny));
        
        return findTariff;
    }

    public async create({ origin, destiny, tax }: ICreateTariffDTO): Promise<Tariff> {
        const tariff = new Tariff();
        
        Object.assign(tariff, {  id: uuid(), origin, destiny, tax });       
        this.tariffs.push(tariff);

        return tariff;
    }
}

export default FakeTariffsRepository;