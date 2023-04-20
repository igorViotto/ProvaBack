
const getVendedores = document.querySelector("#getVendedores");
const getProdutos = document.querySelector("#getProdutos");
const getVendas = document.querySelector("#getVendas");
const inserirVendedor = document.querySelector("#inserirVendedor");
const inserirProduto = document.querySelector("#inserirProduto");
const inserirVenda = document.querySelector("#inserirVenda");

function getVendedores(callback) {
    con.query('SELECT * FROM vendedores', (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}

function getProdutos(callback) {
    con.query('SELECT * FROM produtos', (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}

function getVendas(callback) {
    con.query('SELECT v.*, p.nome AS nome_produto, vd.nome AS nome_vendedor FROM vendas v JOIN produtos p ON v.produtoId = p.id JOIN vendedores vd ON v.vendedorId = vd.id', (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}

function inserirVendedor(nome, comissao, callback) {
    const sql = `INSERT INTO vendedores (nome, comissao) VALUES ('${nome}', ${comissao})`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
}

function inserirProduto(nome, valor, callback) {
    const sql = `INSERT INTO produtos (nome, valor) VALUES ('${nome}', ${valor})`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
}


function inserirVenda(data, quantidade, produtoId, vendedorId, callback) {
    const sql = `INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('${data}', ${quantidade}, ${produtoId}, ${vendedorId})`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
}


function alterarVendedor(id, nome, comissao, callback) {
    const sql = `UPDATE vendedores SET nome='${nome}', comissao=${comissao} WHERE id=${id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        callback(result.affectedRows);
    });
}


function alterarVenda(id, data, quantidade, produtoId, vendedorId, callback) {
    const sql = `UPDATE vendas SET data='${data}', quantidade=${quantidade}, produtoId=${produtoId}, vendedorId=${vendedorId} WHERE id=${id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        callback(result.affectedRows);
    });
}