import FakeTariffsRepository from '../repositories/fakes/FakeTariffsRepository';
import FakePlansRepository from '@modules/plans/repositories/fakes/FakePlansRepository';
import FindDescountService from './FindDescountService';
import CreatePlanService from '@modules/plans/services/CreatePlanService';
import CreateTariffService from './CreateTariffService';
import AppError from '@shared/errors/AppError';

describe('FindDescount', () => {
    it('should be able to return a descount', async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const fakePlansRepository = new FakePlansRepository();
        const findDescount = new FindDescountService(
            fakeTariffsRepository,
            fakePlansRepository,
        );
        
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const plan1 = await createPlan.execute({
            name: 'Plano30Mais',
            free_min: 30,
         });

        const plan2 = await createPlan.execute({
            name: 'Plano60Mais',
            free_min: 60,
         });

        const plan3 = await createPlan.execute({
            name: 'Plano120Mais',
            free_min: 120,
         });

        const tariff_1 = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });
        const tariff_2 = await createTariff.execute({
            origin: '011',
            destiny: '017',
            tax: 1.7,
        });

        const descount1 = await findDescount.execute({
            origin: '011',
            destiny: '016',
            min: 20,
            idPlan: plan1.id,          
        });

        const descount2 = await findDescount.execute({
            origin: '011',
            destiny: '017',
            min: 80,
            idPlan: plan2.id,          
        });

        expect(descount1).toHaveProperty('withFaleMais');
        expect(descount1).toHaveProperty('withoutFaleMais');
        expect(descount1.withFaleMais).toBe(0);
        expect(descount1.withoutFaleMais).toBe(38);

        expect(descount2).toHaveProperty('withFaleMais');
        expect(descount2).toHaveProperty('withoutFaleMais');
        expect(parseFloat(descount2.withFaleMais.toFixed(2))).toBe(37.40);
        expect(descount2.withoutFaleMais).toBe(136);
    });

    it("should not be able to return a descount if tariff doesn't exists", async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const fakePlansRepository = new FakePlansRepository();
        const findDescount = new FindDescountService(
            fakeTariffsRepository,
            fakePlansRepository,
        );
        
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const plan = await createPlan.execute({
            name: 'Plano30Mais',
            free_min: 30,
         });

        const tariff = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });

        await expect(findDescount.execute({
            origin: '074',
            destiny: '071',
            min: 20,
            idPlan: plan.id,          
        })).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to return a descount if plan doesn't exists", async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const fakePlansRepository = new FakePlansRepository();
        const findDescount = new FindDescountService(
            fakeTariffsRepository,
            fakePlansRepository,
        );
        
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const plan = await createPlan.execute({
            name: 'Plano30Mais',
            free_min: 30,
         });

        const tariff = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });

        await expect(findDescount.execute({
            origin: '011',
            destiny: '016',
            min: 20,
            idPlan: 'test-error',         
        })).rejects.toBeInstanceOf(AppError);
    });
    it("should not be able to return a descount minutes it's smaller than 0", async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const fakePlansRepository = new FakePlansRepository();
        const findDescount = new FindDescountService(
            fakeTariffsRepository,
            fakePlansRepository,
        );
        
        const createPlan = new CreatePlanService(
            fakePlansRepository,
        );

        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const plan = await createPlan.execute({
            name: 'Plano30Mais',
            free_min: 30,
         });

        const tariff = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });

        await expect(findDescount.execute({
            origin: '011',
            destiny: '016',
            min: -20,
            idPlan: plan.id,         
        })).rejects.toBeInstanceOf(AppError);
    });
});