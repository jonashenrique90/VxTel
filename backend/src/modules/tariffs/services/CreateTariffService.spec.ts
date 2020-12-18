import FakeTariffsRepository from '../repositories/fakes/FakeTariffsRepository';
import CreateTariffService from './CreateTariffService';

describe('CreateTariff', () => {
    it('should be able to create a new tariff', async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const tariff = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });
        expect(tariff).toHaveProperty('id');
        expect(tariff.origin).toBe('011');
        expect(tariff.destiny).toBe('016');
        expect(tariff.tax).toBe(1.9);
    });

    it('should not be able to create a tariff if with already exists', async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        const tariff = await createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        });
        
        await expect(createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: 1.9,
        })).rejects.toBeInstanceOf(Error);

    });
    it('should not be able to create a tariff if tax < 0', async () => {
        const fakeTariffsRepository = new FakeTariffsRepository();
        const createTariff = new CreateTariffService(
            fakeTariffsRepository,
        );

        // const tariff = await createTariff.execute({
        //     origin: '011',
        //     destiny: '016',
        //     tax: 1.9,
        // });
        await expect(createTariff.execute({
            origin: '011',
            destiny: '016',
            tax: -2,
        })).rejects.toBeInstanceOf(Error);
    });
});