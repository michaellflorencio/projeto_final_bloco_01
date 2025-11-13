import readlinesync = require("readline-sync");

export function main() {

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

        if (opcao == 9) {
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
                // const produto = new Camiseta(id, nome, preco, tamanho);
                console.log("\nProduto cadastrado com sucesso!");
                // produto.visualizar();

                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                break;
            case 3:
                console.log("\n\nListar Produtos por ID\n\n");

                break;
            case 4:
                console.log("\n\nApagar Produto\n\n");

                break;
            case 5:
                console.log("\n\nSair\n\n");

            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Michael Florencio");
    console.log("*****************************************************");
}

main();