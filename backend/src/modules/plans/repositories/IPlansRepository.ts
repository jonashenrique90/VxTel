import Plan from '../infra/typeorm/entities/Plan';
import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO';

export default interface IPlansRepository {
    create(data: ICreatePlanDTO): Promise<Plan>;
    findById(id: string): Promise<Plan | undefined>;
    findAll(): Promise<Plan[] | undefined>;
}