import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ProdutoGetAllService } from '../../services/produto-get-all.service';
import { ProdutoGetInterface } from '../../interfaces/produto-get-interface';
import { ProdutoDeleteService } from '../../services/produto-delete.service';

@Component({
  selector: 'app-produto-grid',
  templateUrl: './produto-grid.component.html',
  styleUrls: ['./produto-grid.component.scss']
})
export class ProdutoGridComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  public produtos: any;
  public ModalProduto !: PoModalAction

  constructor(private produtoGetAllService: ProdutoGetAllService) { }


  ngOnInit(): void {
    this.popularTable();
  }

  private popularTable(){
    this.produtoGetAllService.get().subscribe((prod)=>{
      this.produtos = prod;
    });
  }

  public actions: Array<PoTableAction> = [
    { icon: 'po-icon po-icon-edit', label: 'Alterar' },
    { icon: 'po-icon po-icon-delete', label: 'Deletar', action: this.deletar.bind(this) }
  ];

  private deletar(item: ProdutoGetInterface){
    //this.produtoDeleteService.delete(item.id).subscribe();
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'dataEntrada', label: 'Data Adição', type: 'date' },
    { property: 'valor', label: 'Valor', type: 'currency', format: 'BRL', width: '10%' },
    { property: 'quantidade', label: 'Quantidade' },
    { property: 'quantidadeMin', label: 'Quantidade Mínima' }
  ]


  confirm: PoModalAction = {
    action: () => {

    },
    label: 'Confirmar'
  };

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  closeModal() {
    this.poModal.close();
  }

}
