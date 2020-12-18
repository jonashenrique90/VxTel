import { uuid } from 'uuidv4';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO';
import Plan from '../../infra/typeorm/entities/Plan';

class PlansRepository implements IPlansRepository {
    private plans: Plan[] = [];

    public async create({name, free_min }: ICreatePlanDTO): Promise<Plan> {
        const plan = new Plan();
        
        Object.assign(plan, {  id: uuid(), name, free_min });       
        this.plans.push(plan);

        return plan;
    }

    public async findById(id: string): Promise<Plan | undefined> {
        const findPlan = this.plans.find(plan => plan.id === id);        
        return findPlan;
    }

    public async findAll(): Promise<Plan[] | undefined> {
        return this.plans;
    }
}

export default PlansRepository;