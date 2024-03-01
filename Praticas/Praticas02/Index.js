const readline = require('readline-sync');

const contatoControlador = require('./Controlador');

function menu() {
    console.log("Selecione uma opção:");
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1':
            console.log("Adicionar contato:");
            const nome = readline.question("Nome: ");
            const email = readline.question("Email: ");
            const telefone = readline.question("Telefone: ");
            contatoControlador.adicionarContato(nome, email, telefone);
            console.log("Contato adicionado com sucesso!");
            break;
        case '2':
            console.log("Lista de contatos:");
            const contatos = contatoControlador.listarContatos();
            contatos.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`);
            });
            break;
        case '3':
            console.log("Buscar contato:");
            const nomeBusca = readline.question("Nome do contato: ");
            const contatoEncontrado = contatoControlador.buscarContato(nomeBusca);
            if (contatoEncontrado) {
                console.log(`Nome: ${contatoEncontrado.nome}, Email: ${contatoEncontrado.email}, Telefone: ${contatoEncontrado.telefone}`);
            } else {
                console.log("Contato não encontrado.");
            }
            break;
        case '4':
            console.log("Atualizar contato:");
            const nomeAtualizar = readline.question("Nome do contato: ");
            const emailAtualizar = readline.question("Novo email: ");
            const telefoneAtualizar = readline.question("Novo telefone: ");
            contatoControlador.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
            console.log("Contato atualizado com sucesso!");
            break;
        case '5':
            console.log("Remover contato:");
            const nomeRemover = readline.question("Nome do contato: ");
            contatoControlador.removerContato(nomeRemover);
            console.log("Contato removido com sucesso!");
            break;
        case '6':
            console.log("Encerrando o programa...");
            process.exit();
            break;
        default:
            console.log("Opcao inválida!");
    }
    readline.question("Pressione ENTER para continuar...");
}


function main() {
    while (true) {
        menu();
        const opcao = readline.question("Opcao: ");
        escolherOpcao(opcao);
    }
}

main();
