import { uuid } from 'uuidv4';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Plan from '../../../../modules/plans/infra/typeorm/entities/Plan';

export default class CreatePlans implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Plan)
      .values([
        { id: uuid(), name: 'Fale Mais 30', free_min: 30, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), name: 'Fale Mais 60', free_min: 60, created_at: new Date(), updated_at: new Date()  },
        { id: uuid(), name: 'Fale Mais 120', free_min: 120, created_at: new Date(), updated_at: new Date()  },
      ])
      .execute()
  }
}