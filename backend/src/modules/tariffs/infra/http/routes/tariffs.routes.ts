import { Router } from 'express';
import TariffsController from '../controllers/TariffsController';

const tariffsRouter = Router();
const tariffsController = new TariffsController();

tariffsRouter.post('/', tariffsController.create);

export default tariffsRouter;