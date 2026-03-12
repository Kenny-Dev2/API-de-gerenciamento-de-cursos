const Service = require('./Service.js');

class PessoaService extends Service {
  constructor() {
    super('Pessoa');
  }
}

module.exports = PessoaService;