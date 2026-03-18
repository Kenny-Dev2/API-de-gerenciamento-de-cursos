const Service = require('./Service.js');

class PessoaService extends Service {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }

  async pegaPessoaEscopoTodos() {
    const listaPessoa = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoa;
  }
}

module.exports = PessoaService;