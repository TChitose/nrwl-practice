import { createReducer, on, Action } from '@ngrx/store';
import * as StoresdetailActions from './detail.actions';
import { Color } from '@nrwl-practice/model';

export const DETAIL_FEATURE_KEY = 'storesdetail';

export interface State {
  color: Color
}

export interface StoresdetailPartialState {
  readonly [DETAIL_FEATURE_KEY]: State;
}

export const initialState: State = {
  color: null
};

const storesdetailReducer = createReducer(
  initialState,
  on(StoresdetailActions.setColor,
    (state, {color}) => ({
       ...state,
      color
    }),
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return storesdetailReducer(state, action);
}
