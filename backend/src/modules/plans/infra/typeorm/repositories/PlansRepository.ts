import { getRepository, Repository } from 'typeorm';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO';
import Plan from '../entities/Plan';

class PlansRepository implements IPlansRepository {
    private ormRepository: Repository<Plan>
    constructor() {
        this.ormRepository = getRepository(Plan)
    }

    public async create({name, free_min }: ICreatePlanDTO): Promise<Plan> {
        const plan = this.ormRepository.create({
            name,
            free_min
        });
        
        await this.ormRepository.save(plan);
        return plan;
    }

    public async findById(id: string): Promise<Plan | undefined> {
        const plan = await this.ormRepository.findOne(id);
        return plan;
      }
}

export default PlansRepository;