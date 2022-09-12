const express = require("express");
const router = express.Router();

// Retorna todos os pedido
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna os pedidos",
  });
});

// Insere um pedido
router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "O pedido foi criado",
  });
});

// Retorna os dados de um pedido exclusivo
router.get("/:idpedido", (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).send({
      mensagem: "Detalhes do pedido",
      id_pedido: id,
    });

});

// Altera um pedido
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Pedido alterado",
  });
});

// Deleta um pedido
router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "O pedido foi excluido",
  });
});
module.exports = router;
