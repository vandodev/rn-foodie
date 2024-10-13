import serviceEmpresa from "../services/service.empresa.js";

async function Destaques(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const empresas = await serviceEmpresa.Destaques(id_usuario);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Listar(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const busca = req.query.busca;
        const empresas = await serviceEmpresa.Listar(id_usuario, busca);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function InserirFavorito(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const id_empresa = req.params.id_empresa;
        const empresas = await serviceEmpresa.InserirFavorito(id_usuario, id_empresa);

        res.status(201).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function ExcluirFavorito(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const id_empresa = req.params.id_empresa;
        const empresas = await serviceEmpresa.ExcluirFavorito(id_usuario, id_empresa);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Destaques, Listar, InserirFavorito, ExcluirFavorito };