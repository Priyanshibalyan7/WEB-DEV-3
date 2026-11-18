const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');

router.get('/low-stock', productController.getLowStock);
router.get('/summary', productController.getCategorySummary);
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

router.get('/:id', validateObjectId, productController.getProductById);
router.put('/:id', validateObjectId, productController.updateProduct);
router.delete('/:id', validateObjectId, productController.deleteProduct);
router.patch('/:id/stock', validateObjectId, productController.adjustStock);

module.exports = router;
