import { Router } from 'express';
import { 
listProducts, 
getPrdouctById, 
createProduct, 
deleteProduct, 
updateProduct 
} from './productsController';

//products endpoints
const router = Router();

router.get('/', listProducts);
router.get('/:id', getPrdouctById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;