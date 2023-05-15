import { CategoriaGetInterface } from "src/app/categoria/interfaces/categoria-get-interface";

export interface ProdutoPostInterface {
  titulo: string;
  categoriaId: string;
  valor: number,
  dataEntrada: Date;
  quantidade: number;
  quantidadeMax: number;
  quantidadeMin: number;
}

