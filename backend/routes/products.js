const express = require('express');
const {
    getProds,
    getsingleProd,
    createProd,
    deleteProd,
    updateProd
} = require('../controllers/productController')
const router = express.Router();

router.get('/', getProds)

router.get('/:id', getsingleProd)

router.post('/', createProd)

router.delete('/:id', deleteProd)

router.patch('/:id', updateProd)

module.exports = router;