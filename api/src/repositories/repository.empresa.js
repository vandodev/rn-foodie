import { execute } from "../database/sqlite.js";

async function Destaques(id_usuario) {

    const sql = `select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
    from  destaque d
    join empresa e on (e.id_empresa = d.id_empresa)
    left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
    order by d.ordem`;

    const empresas = await execute(sql, [id_usuario]);

    return empresas;
}



export default { Destaques };