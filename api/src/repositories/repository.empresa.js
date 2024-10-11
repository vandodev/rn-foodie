import { execute } from "../database/sqlite.js";

async function Destaques() {

    const sql = `select e.*, 'N' as favorito
    from  destaque d
    join empresa e on (e.id_empresa = d.id_empresa)
    order by d.ordem`;

    const empresas = await execute(sql, []);

    return empresas;
}

export default { Destaques };