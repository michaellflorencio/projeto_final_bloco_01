export abstract class Produto {
  constructor(
    private id: number,
    private nome: string,
    private preco: number
  ) {}

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }
  
  public visualizar(): void{

  }


}
