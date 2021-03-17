import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as StoresdetailFeature from './detail.reducer';
import * as StoresdetailActions from './detail.actions';

@Injectable()
export class StoresdetailEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresdetailActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return StoresdetailActions.loadStoresdetailSuccess({
            storesdetail: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return StoresdetailActions.loadStoresdetailFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
