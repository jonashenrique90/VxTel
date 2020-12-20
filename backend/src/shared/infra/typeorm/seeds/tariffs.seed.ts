import { uuid } from 'uuidv4';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Tariff from '../../../../modules/tariffs/infra/typeorm/entities/Tariff';

export default class CreateTariffs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Tariff)
      .values([
        { id: uuid(), origin: '011', destiny: '016', tax: 1.9, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), origin: '016', destiny: '011', tax: 2.9, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), origin: '011', destiny: '017', tax: 1.7, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), origin: '017', destiny: '011', tax: 2.7, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), origin: '011', destiny: '018', tax: 0.9, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), origin: '018', destiny: '011', tax: 1.9, created_at: new Date(), updated_at: new Date()  },
      ])
      .execute()
  }
}