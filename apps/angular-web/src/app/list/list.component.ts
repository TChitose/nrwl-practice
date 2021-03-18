import { Component, OnInit } from '@angular/core';
import { ListStore } from './list.store';
import { StoresdetailFacade } from '@nrwl-practice/stores/detail';
import { Color } from '@nrwl-practice/model';
@Component({
  selector: 'nrwl-practice-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListStore]
})
export class ListComponent implements OnInit {

  constructor(
    private listStore: ListStore,
    private storesdetailFacade: StoresdetailFacade
  ) {
    //empty
  }

  readonly colorList$ = this.listStore.colorList$;

  ngOnInit(){
    this.listStore.getColorList(true);
  }

  click(color: Color){
    this.storesdetailFacade.setColor(color);
  }
}
