const dataSource = require('../models');

class Service {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async criaUmRegistro(dados) {
    return await dataSource[this.model].create(dados);
  }

  async atualizaUmRegistro(dadosAtualizados, id) {
    const listaDeregistrosAtualizados = await dataSource[this.model].update(
      dadosAtualizados,
      { where: { id: id } },
    );
    if (listaDeregistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiUmRegistro(id) {
    return await dataSource[this.model].destroy({ where: { id: Number(id) } });
  }
}

module.exports = Service;

