import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaGetAllService } from '../../services/categoria-get-all.service';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.scss']
})
export class CategoriaGridComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  public categorias: any;
  constructor(private categoriaGetAllService: CategoriaGetAllService) { }

  ngOnInit(): void {
    this.popularTable();
  }

  private popularTable(){
    this.categoriaGetAllService.get().subscribe((cate)=>{
      this.categorias = cate;
    });
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'descricao', label: 'Descricao'}
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
