const dataSource = require('../database/models');

class Service {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    return await dataSource[this.model].findAll({ where: { ...where } });
  }

  async pegaRegistrosPorEscopo(escopo) {
    return await dataSource[this.model].scope(escopo).findAll({paranoid: false});
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return await dataSource[this.model].findOne({ where: { ...where } });
  }

  async criaUmRegistro(dados) {
    return await dataSource[this.model].create(dados);
  }

  async atualizaUmRegistro(dadosAtualizados, where) {
    const listaDeregistrosAtualizados = await dataSource[this.model].update(
      dadosAtualizados,
      { where: { ...where } },
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

