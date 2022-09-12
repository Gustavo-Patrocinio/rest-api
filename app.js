const express = require("express");
const app = express();

const rotaProdutos = require("./routes/produtos");
const rotaProdutos = require("./routes/pedidos");

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

module.exports = app;
