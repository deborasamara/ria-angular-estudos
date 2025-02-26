import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-inserir-produto',
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './inserir-produto.component.html',
  styleUrl: './inserir-produto.component.css'
})
export class InserirProdutoComponent {
  produto: Produto = { nome: '', preco: 0, disponivel: true };

  constructor(private produtoService: ProdutoService) {} //construtor

  adicionarProduto(){
    this.produtoService.adicionarProduto(this.produto); // salvar no serviço
    console.log('Produto adicionado:', this.produto);
    this.produto = { nome: '', preco: 0, disponivel: true };  // limpar o formulário

  }
}
