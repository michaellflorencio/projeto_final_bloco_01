import readlinesync = require("readline-sync");
import { Camiseta } from "./src/model/Camiseta";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";

export function main() {
    let produto: ProdutoController = new ProdutoController();

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              Capybara Cult Clothing                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("1 - Cadastrar produto");
        console.log("2 - Listar produtos");
        console.log("3 - Buscar produto por ID");
        console.log("4 - Apagar Produto");
        console.log("5 - Sair");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nCapybara Cult Clothing - The best here!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");
                const id = readlinesync.questionInt("ID: ");
                const nome = readlinesync.question("Nome: ");
                const preco = readlinesync.questionFloat("Preço: ");
                const tamanho = readlinesync.question("Tamanho: ");
                const novoProduto = new Camiseta(id, nome, preco, tamanho);
                produto.cadastrar(novoProduto); // salva no controller
                break;

            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produto.listarTodos(); // mostra produtos cadastrados
                break;

            case 3:
                console.log("\n\nListar Produto por ID\n\n");
                const idBusca = readlinesync.questionInt("Digite o ID: ");
                produto.buscarPorId(idBusca); // busca produto específico
                break;

            case 4:
                console.log("\n\nApagar Produto\n\n");
                const idDel = readlinesync.questionInt("Digite o ID: ");
                produto.deletar(idDel); // remove produto da lista
                break;

            case 5:
                console.log("\n\nSair\n\n");
                sobre();
                process.exit(0);

            default:
                console.log("\nOpção Inválida!\n");
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Michael Florencio");
    console.log("*****************************************************");
}

main();