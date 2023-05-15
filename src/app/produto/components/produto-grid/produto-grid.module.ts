import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoDividerModule, PoFieldModule, PoLoadingModule, PoPageModule, PoTableModule, PoWidgetModule  } from '@po-ui/ng-components';
import { ProdutoGridComponent } from './produto-grid.component';
import { PoModalModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProdutoGridComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoFieldModule,
    PoPageModule,
    PoWidgetModule,
    PoButtonModule,
    PoLoadingModule,
    PoModalModule,
    ReactiveFormsModule,
    PoDividerModule

  ],
  exports: [ProdutoGridComponent]
})
export class ProdutoGridModule { }
