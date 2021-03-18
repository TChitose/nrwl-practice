import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from '@nrwl-practice/model';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { StoresdetailFacade } from '@nrwl-practice/stores/detail';
export interface DetailState {
  destroyed?: boolean;
  colorDetail: Color[];
}

@Injectable()
export class DetailStore extends ComponentStore<DetailState> {

  constructor(
    private storesDetailFacade: StoresdetailFacade,
    private route: ActivatedRoute
  ) {
    super({colorDetail: []});
  }

  readonly color$: Observable<Color> = this.storesDetailFacade.color$.pipe(first());
  readonly destroyed$: Observable<boolean>  = this.select(state => state.destroyed).pipe(filter(x => !!x));

  readonly colorNm$: Observable<string>  = this.select(this.color$, (color) => color.name);
  readonly colorCd$: Observable<string>  = this.select(this.color$, (color) => color.code);
  readonly description$ : Observable<string>  = this.select(this.colorNm$, this.colorCd$ , (name, cd) => name + ' #' + cd);
}
