import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DETAIL_FEATURE_KEY, State, StoresdetailPartialState } from './detail.reducer';

// Lookup the 'Storesdetail' feature state managed by NgRx
export const getStoresdetailState = createFeatureSelector<StoresdetailPartialState, State>(DETAIL_FEATURE_KEY);


export const getColor = createSelector(
  getStoresdetailState,
  (state: State) => state.color
);


