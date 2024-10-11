import serviceEmpresa from "../services/service.empresa.js";

async function Destaques(req, res) {
    try {
        const empresas = await serviceEmpresa.Destaques();

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Destaques };