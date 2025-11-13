import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    private id: number = 0;


    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\n Produto cadastrado com sucesso!");
    }


    public listarTodos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("\n Nenhum produto cadastrado!");
            return;
        }

        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    public buscarPorId(id: number): void {
        const produto = this.buscarNoArray(id);

        if (produto != null) {
            produto.visualizar();
        } else {
            console.log("\n Produto com ID: " + id + " não foi encontrado!");
        }
    }


    public atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.getId());

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\n Produto ID " + produto.getId() + " atualizado com sucesso!");
        } else {
            console.log("\n Produto ID " + produto.getId() + " não encontrado!");
        }
    }


    public deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\n Produto ID " + id + " deletado com sucesso!");
        } else {
            console.log("\n Produto ID " + id + " não encontrado!");
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    private buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.getId() === id) {
                return produto;
            }
        }
        return null;
    }
}
