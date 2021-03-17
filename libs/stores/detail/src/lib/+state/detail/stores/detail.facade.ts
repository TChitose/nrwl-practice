import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as StoresdetailActions from './detail.actions';
import * as StoresdetailFeature from './detail.reducer';
import * as StoresdetailSelectors from './detail.selectors';

@Injectable()
export class StoresdetailFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(StoresdetailSelectors.getStoresdetailLoaded)
  );
  allStoresdetail$ = this.store.pipe(
    select(StoresdetailSelectors.getAllStoresdetail)
  );
  selectedStoresdetail$ = this.store.pipe(
    select(StoresdetailSelectors.getSelected)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(StoresdetailActions.init());
  }
}
