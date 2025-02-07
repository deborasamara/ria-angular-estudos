import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { ListarProdutosComponent } from '../listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from '../inserir-produto/inserir-produto.component';
import { DetalhesProdutoComponent } from '../detalhes-produto/detalhes-produto.component';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produtos',
  imports: [
    InputTextModule, TabsModule, ListarProdutosComponent, InserirProdutoComponent, DetalhesProdutoComponent
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  // CRUD
  produto: Produto = {nome: '', preco: 0, disponivel: false};
  produtos: Produto[] = []; 
  
  adicionar_produto(){
    this.produtos.push({ ...this.produto });
    this.produto = { nome: '', preco: 0, disponivel: false };
  }


}
