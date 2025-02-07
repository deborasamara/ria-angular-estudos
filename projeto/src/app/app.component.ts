import { Component } from '@angular/core';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ListarProdutosComponent } from './componentes/listar-produtos/listar-produtos.component'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ProdutosComponent, ListarProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'projeto';
}
