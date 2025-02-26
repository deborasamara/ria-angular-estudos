import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-listar-produtos',
  imports: [CommonModule, DialogModule],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent implements OnInit{
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  // carregamento de produtos ao inicializar
  ngOnInit():void{
    this.produtos = this.produtoService.listarProdutos();
  }

}
