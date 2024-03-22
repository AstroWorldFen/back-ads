const express = require('express');

const produtosController = require('../controllers/controller_produto');

const router = express.Router();

router.get('/', produtosController.listarTodos);

router.get('/:produtosId', produtosController.buscarpeloId, produtosController.exibir);

router.post('/', produtosController.validarDados, produtosController.criar);

router.put('/:produtosId', produtosController.buscarpeloId,produtosController.validarDados, produtosController.atualizar);

router.delete('/:produtosId', produtosController.buscarpeloId,produtosController.validarDados, produtosController.remover);

module.exports = router;