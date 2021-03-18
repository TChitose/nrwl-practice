import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as StoresdetailActions from './detail.actions';
import * as StoresdetailSelectors from './detail.selectors';
import { Color } from '@nrwl-practice/model';

@Injectable()
export class StoresdetailFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  color$ = this.store.pipe(
    select(StoresdetailSelectors.getColor)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  setColor(color: Color) {
    this.store.dispatch(StoresdetailActions.setColor({color}));
  }
}
