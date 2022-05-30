import transportationController from 'controllers/transportation.controller';
import { Router } from 'express';

const router = Router();

router.get('/', transportationController.getAllTransportation);

router.post('/', transportationController.addNewTransportation);
router.post('/batch', transportationController.addBatchedTransportation);

router.put('/:id', transportationController.updateById);

router.delete('/:id', transportationController.deleteById);

export default router;
