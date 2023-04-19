const express = require('express');
const app = express();
const cors = require('cors');
const produtoRouter = require('./src/routes/produtos');
const vendedorRouter = require('./src/routes/vendas');
const vendaRouter = require('./src/routes/vendas');

app.use(express.json());
app.use(cors());

app.use(produtoRouter);
app.use(vendedorRouter);
app.use(vendaRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});