import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DETAIL_FEATURE_KEY, State, StoresdetailPartialState, storesdetailAdapter } from './detail.reducer';

// Lookup the 'Storesdetail' feature state managed by NgRx
export const getStoresdetailState = createFeatureSelector<StoresdetailPartialState, State>(DETAIL_FEATURE_KEY);

const { selectAll, selectEntities } = storesdetailAdapter.getSelectors();

export const getStoresdetailLoaded = createSelector(
  getStoresdetailState,
  (state: State) => state.loaded
);

export const getStoresdetailError = createSelector(
  getStoresdetailState,
  (state: State) => state.error
);

export const getAllStoresdetail = createSelector(
  getStoresdetailState,
  (state: State) => selectAll(state)
);

export const getStoresdetailEntities = createSelector(
  getStoresdetailState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getStoresdetailState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getStoresdetailEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
