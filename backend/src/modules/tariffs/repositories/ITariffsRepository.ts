import ICreateTariffDTO from '../dtos/ICreateTariffDTO';
import Tariff from '../infra/typeorm/entities/Tariff';
export default interface ITariffsRepository {
    create(data: ICreateTariffDTO): Promise<Tariff>;
    findByOriginAndDestiny(origin: string, destiny: string): Promise<Tariff | undefined>;
}