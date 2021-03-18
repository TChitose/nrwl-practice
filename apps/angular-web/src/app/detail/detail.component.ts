import { Component } from '@angular/core';
import { DetailStore } from './detail.store';

@Component({
  selector: 'nrwl-practice-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [DetailStore]
})
export class DetailComponent {

  constructor(
    private detailStore: DetailStore
  ) { }

  readonly colorNm$ = this.detailStore.colorNm$;
  readonly colorCd$ = this.detailStore.colorCd$;
  readonly description$ = this.detailStore.description$;
}
