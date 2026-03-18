const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatriculasAtivas(req, res) {
    try {
      const { estudante_id } = req.params;
      const matriculas = await pessoaService.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      res.status(200).json(matriculas);
    } catch (erro) {
      res.status(500).json(erro.message);
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    try {
      const { estudante_id } = req.params;
      const matriculas = await pessoaService.pegaTodasMatriculasPorEstudante(Number(estudante_id));
      res.status(200).json(matriculas);
    } catch (erro) {
      res.status(500).json(erro.message);
    }
  }

  async pegaTodasPessoas(req, res) {
    try {
      const listaPessoas = await pessoaService.pegaPessoaEscopoTodos();
      res.status(200).json(listaPessoas);
    } catch (erro) {
      res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;