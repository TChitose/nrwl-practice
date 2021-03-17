import { createAction, props } from '@ngrx/store';
import { StoresdetailEntity } from './detail.models';

export const init = createAction('[Storesdetail Page] Init');

export const loadStoresdetailSuccess = createAction(
  '[Storesdetail/API] Load Storesdetail Success',
  props<{ storesdetail: StoresdetailEntity[] }>()
);

export const loadStoresdetailFailure = createAction(
  '[Storesdetail/API] Load Storesdetail Failure',
  props<{ error: any }>()
);
