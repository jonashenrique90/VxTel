import TariffsRepository from '@modules/tariffs/infra/typeorm/repositories/TarrifsRepository';
import ITariffsRepository from '@modules/tariffs/repositories/ITariffsRepository';
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import { container } from 'tsyringe';


container.registerSingleton<ITariffsRepository>(
    'TariffsRepository',
    TariffsRepository,
);

container.registerSingleton<IPlansRepository>(
    'PlansRepository',
    PlansRepository,
);