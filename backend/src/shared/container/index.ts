import TariffsRepository from '@modules/tariffs/infra/typeorm/repositories/TarrifsRepository';
import ITariffsRepository from '@modules/tariffs/repositories/ITariffsRepository';
import { container } from 'tsyringe';


container.registerSingleton<ITariffsRepository>(
    'TariffsRepository',
    TariffsRepository,
);