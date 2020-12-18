import { inject, injectable} from 'tsyringe';
import Plan from '../infra/typeorm/entities/Plan';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

@injectable()
class ListPlansService {
    constructor(
        @inject('PlansRepository')
        private plansRepository: IPlansRepository,
    ) {}
    
    public async execute(): Promise<Plan[] | undefined> {
        
        const plans = await this.plansRepository.findAll();
        
        return plans;
    }
}

export default ListPlansService;