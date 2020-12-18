import { injectable, inject } from 'tsyringe';
import ITariffsRepository from '../repositories/ITariffsRepository';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

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

@injectable()
class FindDescountService {
    constructor(
        @inject('TariffsRepository')
        private tariffsRepository: ITariffsRepository,
        @inject('PlansRepository')
        private plansRepository: IPlansRepository,
    ) {}
    
    public async execute({origin, destiny, min, idPlan }: RequestDTO): Promise<Response> {
        let withFaleMais = 0;
        let withoutFaleMais = 0;
        
        if(min < 0) {
            throw new Error('Minutes most be greater then 0');
        }
        const tariff = await this.tariffsRepository.findByOriginAndDestiny(origin, destiny);
        
        if(!tariff) {
            throw new Error('should not be able to find a tax from origin and destiny');
        }
        
        withoutFaleMais = min * tariff?.tax;

        const plan = await this.plansRepository.findById(idPlan);
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