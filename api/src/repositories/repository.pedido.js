import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = `select p.*, e.nome, e.icone
    from pedido p
    join empresa e on (e.id_empresa = p.id_empresa)
    order by p.id_pedido desc`;

    const pedidos = await execute(sql, []);

    return pedidos;
}

async function ListarId(id_pedido) {

    const sql = `select p.*, e.nome, e.icone
    from pedido p
    join empresa e on (e.id_empresa = p.id_empresa)
    where p.id_pedido = ?
    order by p.id_pedido desc`;

    const sqlItens = `select i.*, p.nome, p.descricao, p.icone
    from pedido_item i
    join produto p on (p.id_produto = i.id_produto)
    where i.id_pedido = ?
    order by i.id_item`;

    const pedido = await execute(sql, [id_pedido]);
    const itens = await execute(sqlItens, [id_pedido]);

    pedido[0].itens = itens;

    return pedido[0];
}

export default { Listar, ListarId };