import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  // Usando um array simples
  private produtos: Produto[] = [];

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }
}