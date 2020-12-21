import FakePlansRepository from '../repositories/fakes/FakePlansRepository';
import CreatePlanService from './CreatePlanService';
import AppError from '@shared/errors/AppError';

describe('CreatePlan', () => {
    it('should be able to create a new plan', async () => {
        const fakePlansRepository = new FakePlansRepository();
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const plan = await createPlan.execute({
           name: 'Plano30Mais',
           free_min: 30,
        });
        expect(plan).toHaveProperty('id');
        expect(plan.name).toBe('Plano30Mais');
        expect(plan.free_min).toBe(30);
    });

    it('should not be able to create a plan if minutes < 0', async () => {
        const fakePlansRepository = new FakePlansRepository();
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        await expect(createPlan.execute({
            name: 'Plano30Mais',
            free_min: -30,
        })).rejects.toBeInstanceOf(AppError);
    });
});