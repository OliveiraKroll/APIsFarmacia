const express = require('express');
const server = express();
const dados = require('./src/data/data.json');
const req = require('express/lib/request');
const res = require('express/lib/response');

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});

server.get('/cliente',(req, res) => {
    return res.json(dados.Cliente)
} );

server.get('/venda',(req, res) => {
    return res.json(dados.Venda)
} );

server.get('/vendedor',(req, res) => {
    return res.json(dados.Vendedor)
} );

server.get('/farmacia',(req, res) => {
    return res.json(dados.Farmacia)
} );

server.get('/fornecedor',(req, res) => {
    return res.json(dados.Fornecedor)
} );

server.get('/medicamento',(req, res) => {
    return res.json(dados.Medicamento)
} );

server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});