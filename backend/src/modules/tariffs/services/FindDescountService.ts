import { getCustomRepository } from 'typeorm';
import PlansRepository from '@modules/plans/infra/typeorm/repositories/PlansRepository';
import TariffsRepository from '@modules/tariffs/infra/typeorm/repositories/TarrifsRepository';

interface RequestDTO {
    origin?: string;
    destiny?: string;
    min: number;
    idPlan: string;
}

interface Response {
    withFaleMais: number;
    withoutFaleMais: number;
}

class FindDescountService{
    
    public async execute({origin, destiny, min, idPlan }: RequestDTO): Promise<Response> {
        let withFaleMais = 0;
        let withoutFaleMais = 0;
        const plansRepository = getCustomRepository(PlansRepository);
        const tariffsRepository = getCustomRepository(TariffsRepository);
        
        const tariff = await tariffsRepository.findByOriginAndDestiny(origin, destiny);
        if(!tariff) {
            throw new Error('should not be able to find a tax from origin and destiny');
        }
        console.log(min);
        console.log(tariff);
        
        
        withoutFaleMais = min * tariff?.tax;

        const plan = await plansRepository.findOne(idPlan);
        if(!plan) {
            throw new Error('should not be able to find a plan');
        }
       
        const free_minutes = (min - plan?.free_min);
        
        
        if(free_minutes > 0) {
            withFaleMais = free_minutes * (tariff?.tax * 1.1);
        }
        return {
            withFaleMais,
            withoutFaleMais
        }
    }
}

export default FindDescountService;