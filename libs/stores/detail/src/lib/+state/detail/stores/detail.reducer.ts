import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as StoresdetailActions from './detail.actions';
import { StoresdetailEntity } from './detail.models';

export const DETAIL_FEATURE_KEY = 'storesdetail';

export interface State extends EntityState<StoresdetailEntity> {
  selectedId ?: string | number;          // which Storesdetail record has been selected
  loaded      : boolean;                  // has the Storesdetail list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface StoresdetailPartialState {
  readonly [DETAIL_FEATURE_KEY]: State;
}

export const storesdetailAdapter: EntityAdapter<StoresdetailEntity> = createEntityAdapter<StoresdetailEntity>();

export const initialState: State = storesdetailAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const storesdetailReducer = createReducer(
  initialState,
  on(StoresdetailActions.init,
    state => ({ ...state, loaded: false, error: null }), null,null
  ),
  on(StoresdetailActions.loadStoresdetailSuccess,
    (state, { storesdetail }) => storesdetailAdapter.setAll(storesdetail, { ...state, loaded: true })
  ),
  on(StoresdetailActions.loadStoresdetailFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return storesdetailReducer(state, action);
}
