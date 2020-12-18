import FakePlansRepository from '../repositories/fakes/FakePlansRepository';
import ListPlansService from './ListPlansService';
import CreatePlanService from './CreatePlanService';

describe('ListPlans', () => {
    it('should be able to list all plans', async () => {
        const fakePlansRepository = new FakePlansRepository();
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const listPlan = new ListPlansService(
            fakePlansRepository,
        );

        const plan1 = await createPlan.execute({
           name: 'Plano30Mais',
           free_min: 30,
        });

        const plan2 = await createPlan.execute({
           name: 'Plano60Mais',
           free_min: 60,
        });

        const plans = await listPlan.execute();
        expect(plans).toEqual([plan1, plan2]);
    });
});