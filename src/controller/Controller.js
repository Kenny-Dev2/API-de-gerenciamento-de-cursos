class Controller {
  constructor(service) {
    this.service = service;
  }

  async pegaTodos(req, res) {
    try {
      const registros = await this.service.pegaTodosOsRegistros();
      return res.status(200).json(registros);
    } catch (erro) {
      res.status(500).json({ mensagem: `Ocorreu um erro: ${erro.message}` });
    }
  }

  async pegaUmPorId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.service.pegaUmRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (erro) {
      res.status(500).json({ mensagem: `Ocorreu um erro: ${erro.message}` });
    }
  }

  async cria(req, res) {
    try {
      const dados = req.body;
      const novoRegistro = await this.service.criaUmRegistro(dados);
      return res.status(201).json(novoRegistro);
    } catch (erro) {
      res.status(500).json({ mensagem: `Ocorreu um erro: ${erro.message}` });
    }
  }

  async atualiza(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const foiAtualizado = await this.service.atualizaUmRegistro(dados, Number(id));
      if (!foiAtualizado) {
        return res.status(404).json({ mensagem: 'Registro não encontrado' });
      }
      return res.status(200).json({ mensagem: 'Registro atualizado com sucesso' });
    } catch (erro) {
      res.status(500).json({ mensagem: `Ocorreu um erro: ${erro.message}` });
    }
  }

  async exclui(req, res) {
    try {
      const { id } = req.params;
      await this.service.excluiUmRegistro(id);
      return res.status(204).end();
    } catch (erro) {
      res.status(500).json({ mensagem: `Ocorreu um erro: ${erro.message}` });
    }
  }
}

module.exports = Controller;
