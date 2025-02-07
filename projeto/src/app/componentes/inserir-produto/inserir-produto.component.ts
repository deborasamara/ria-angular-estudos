import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-inserir-produto',
  imports: [InputTextModule, FormsModule],
  templateUrl: './inserir-produto.component.html',
  styleUrl: './inserir-produto.component.css'
})
export class InserirProdutoComponent {
  produto: Produto = { nome: '', preco: 0, disponivel: false };
}
