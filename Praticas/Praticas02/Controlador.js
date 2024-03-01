class Contato {
    constructor(nome, email, telefone) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  }
  
const contatos = [];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos;
}

function buscarContato(nome) {
    return contatos.find(contato => contato.nome === nome);
} 

function atualizarContato(nome, email, telefone) {
    const contato = contatos.find(contato => contato.nome === nome);
    if (contato) {
        contato.email = email;
        contato.telefone = telefone;
    }
}

function removerContato(nome) {
    const index = contatos.findIndex(contato => contato.nome === nome);
    if (index !== -1) {
        contatos.splice(index, 1);
    }
}

module.exports = { Contato, adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato };
