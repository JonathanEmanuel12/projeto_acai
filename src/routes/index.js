const express = require('express');


const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/novo_pedido', (req, res, next) => {
    res.render('novo_pedido');
})

module.exports = router;
