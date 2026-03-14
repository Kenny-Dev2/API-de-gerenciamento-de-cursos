const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculas(req, res) {
    try {
      const { estudanteId } = req.params;
      const matriculas = await pessoaService.pegaMatriculasPorEstudante(Number(estudanteId));
      res.status(200).json(matriculas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;