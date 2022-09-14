const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");
// const bodyParser = require("body-parser");

app.use(morgan("dev")); // recebe os logs das requisicoes
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); // so aceita formato json de entrada no body

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // * = aceita tudo
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).send({});
  }

  next();
});

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

// quando nao encontra a rota
app.use((req, res, next) => {
  const erro = new Error("Rota nao encontrada");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
module.exports = app;
