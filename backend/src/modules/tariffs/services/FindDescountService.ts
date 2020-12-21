import { injectable, inject } from 'tsyringe';
import ITariffsRepository from '../repositories/ITariffsRepository';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import AppError from '@shared/errors/AppError';

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
            throw new AppError('Minutes most be greater then 0');
        }
        const tariff = await this.tariffsRepository.findByOriginAndDestiny(origin, destiny);
        
        if(!tariff) {
            throw new AppError('Não foi possível encontrar uma tarifa para o DDD de origem e destino informados!');
        }
        
        withoutFaleMais = min * tariff?.tax;

        const plan = await this.plansRepository.findById(idPlan);
        if(!plan) {
            throw new AppError('should not be able to find a plan');
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