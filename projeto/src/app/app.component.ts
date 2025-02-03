import { Component } from '@angular/core';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

@Component({
  selector: 'app-root',
  imports: [ProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
