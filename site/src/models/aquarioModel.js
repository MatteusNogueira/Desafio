var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  instrucaoSql = `select * from estufa a where fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  instrucaoSql = `insert into (descricao, fk_empresa) estufa values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
