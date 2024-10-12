import { execute } from "../database/sqlite.js";

async function Favoritos(id_usuario) {

    const sql = `select f.*, e.icone, e.nome, e.endereco, e.complemento, e.bairro, e.cidade, e.uf
    from usuario_favorito f
    join empresa e on (e.id_empresa = f.id_empresa)
    where f.id_usuario = ?`;

    const favoritos = await execute(sql, [id_usuario]);

    return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

    const sql = `insert into usuario(nome, email, senha, 
            endereco, complemento, bairro, cidade, uf, cep, dt_cadastro) 
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP) returning id_usuario`;

    let usuario = await execute(sql, [nome, email, senha, endereco, complemento,
        bairro, cidade, uf, cep]);

    // Resolver lower case...
    let retorno = {
        id_usuario: usuario[0].ID_USUARIO
    }
    //-------------------------

    return retorno;
}

export default { Favoritos, Inserir };