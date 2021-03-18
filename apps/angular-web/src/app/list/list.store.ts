import { ComponentStore, tapResponse} from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Color } from '@nrwl-practice/model';
import { Observable } from 'rxjs';
import { switchMap, filter, first } from 'rxjs/operators';
import { GetColorListService } from '@nrwl-practice/backend'

export interface ListState {
  destroyed?: boolean;
  colorList: Color[];
}

@Injectable()
export class ListStore extends ComponentStore<ListState> {

  constructor(
    private getColorListService: GetColorListService
  ) {
    super({colorList: []});
  }

  readonly destroyed$: Observable<boolean>  = this.select(state => state.destroyed).pipe(filter(x => !!x));
  readonly colorList$: Observable<Color[]> = this.select(state => state.colorList);

  readonly setColorList = this.updater((state, colorList: Color[]) => ({
    ...state,
    colorList
  }));

  readonly getColorList = this.effect((ignit$: Observable<boolean>) => {
    return ignit$.pipe(
      first(),
      switchMap(() => this.getColorListService.execute().pipe(
        tapResponse(
          (color) => this.setColorList(color),
          (error) => console.error(error),
        ),
      )),
    );
  });
}
