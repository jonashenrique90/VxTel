import { Router } from 'express';
import DescountsController from '../controllers/DescountsController';

const descountRouter = Router();
const descountsController = new DescountsController();


descountRouter.get('/', descountsController.index);

export default descountRouter;