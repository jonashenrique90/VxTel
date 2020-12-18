import { Router } from 'express';
import TariffsController from '../controllers/TariffsController';

const tariffsRouter = Router();
const tariffsController = new TariffsController();


// tariffsRouter.get('/', async (request, response) => {
    
//     const tariffs = await tariffsRepository.find();
//     return response.json(tariffs);
// });


tariffsRouter.post('/', tariffsController.create);

export default tariffsRouter;