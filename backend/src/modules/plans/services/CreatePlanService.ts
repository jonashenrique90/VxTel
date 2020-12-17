import Plan from '../infra/typeorm/entities/Plan';
import { getCustomRepository } from 'typeorm';
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository';

interface RequestDTO {
    name: string;
    free_min: number;
}

class CreatePlanService{
    
    public async execute({name, free_min }: RequestDTO): Promise<Plan> {
        const plansRepository = getCustomRepository(PlansRepository);
        
        const plan = plansRepository.create({
            name,
            free_min,
        });
        await plansRepository.save(plan);
        return plan;
    }
}

export default CreatePlanService;