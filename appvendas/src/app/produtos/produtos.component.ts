import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent  implements OnInit {
  produtos: IProduto [] | undefined;
  termoBusca: string = '';

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ){  }

  ngOnInit(): void{
    /* this.produtos = this.produtoService.getAll(); */
    /* const produtos = this.produtoService.getAll(); */
    this.route.queryParamMap.subscribe(params => {
    this.termoBusca = params.get("descricao")?.toLowerCase() || '' ;
    this.buscarProdutos();
    });
  }

  public buscarProdutos(): void{
    const produtos = this.produtoService.getAll();
    const termoBuscaLowerCase = this.termoBusca.toLowerCase();

    if(termoBuscaLowerCase){
      this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(termoBuscaLowerCase));
    }else{
      this.produtos = produtos
    }

  }
}
