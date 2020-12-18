import { inject, injectable} from 'tsyringe';
import Plan from '../infra/typeorm/entities/Plan';
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

interface RequestDTO {
    name: string;
    free_min: number;
}
@injectable()
class CreatePlanService {
    constructor(
        @inject('PlansRepository')
        private plansRepository: IPlansRepository,
    ) {}
    
    public async execute({name, free_min }: RequestDTO): Promise<Plan> {
        
        const plan = await this.plansRepository.create({
            name,
            free_min,
        });
        
        return plan;
    }
}

export default CreatePlanService;