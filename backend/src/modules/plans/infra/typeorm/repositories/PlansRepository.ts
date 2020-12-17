import { EntityRepository, Repository } from 'typeorm';
import Plan from '@modules/plans/infra/typeorm/entities/Plan';

@EntityRepository(Plan)
class PlansRepository extends  Repository<Plan>{
    
}

export default PlansRepository;