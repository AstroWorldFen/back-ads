const express = require('express');

const router = express.Router();


router.get("/produtos", function(req, resp){
    resp.json([])
});

router.get("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId == 1) {
        res.json({});
    }else {
        res.status(404).json({msg: "Produto nao encontrado"});
    }
});

router.post("/produtos", function(req, res){
    if (req.body && req.body.nome && req.body.preco){
        res.status(201).json({}); 
    }else{
        res.status(422)
        .json({msg: "Nome e preco do produto obrigatorios"});
    }
    
})

router.put("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId == 1) {
        res.json({}); 
    } else {

    }
    res.status(404).json({msg: "Produto nao encontrado"})
});

router.delete("/produtos/:produtoId", function(req, res){
    if (req.params.produtoId == 1){
        res.status(204).end();
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }

});



module.exports = router;