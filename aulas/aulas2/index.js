const readline = require("readline-sync");

const controlador = require('./controlador');

function menu() {
    console.log("1.listar");
    console.log("2.criar");
    console.log("3.buscar");
    console.log("4.Atualizar");
    console.log("5.Remover");
    console.log("6.Sair");
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': 
              controladdor.listar()
              break;
        case '2': 
              controlador.criar()
              break;
        case '3': 
              controlador.buscar()
              break;
        case '4': 
              controlador.Atualizar()
              break;
        case '5': 
              controlador.Remover()
              break;
        case '6':
             Process.exit(0);
        default: 
        console.log("opcao invalida");
    }
    readline.question("Pressione ENTER para continuar...");
}

function main() {
    while(true){
    menu();
    const opcao = readline.question("Entre com uma opcao:");
    escolherOpcao(opcao);
    }

}
main();