import { Produto } from "./Produto";

export class Camiseta extends Produto {
  constructor(
    id: number,
    nome: string,
    preco: number,
    private tamanho: string
  ) {
    super(id, nome, preco);
  }

  // polimorfismo: sobrescrita do método visualizar
  public visualizar(): void {
    console.log("\n=== Detalhes da Camiseta ===");
    console.log(`ID: ${this.getId()}`);
    console.log(`Nome: ${this.getNome()}`);
    console.log(`Preço: R$ ${this.getPreco().toFixed(2)}`);
    console.log(`Tamanho: ${this.tamanho}`);
  }

  // getter/setter adicionais
  public getTamanho(): string {
    return this.tamanho;
  }

  public setTamanho(tamanho: string): void {
    this.tamanho = tamanho;
  }
}
