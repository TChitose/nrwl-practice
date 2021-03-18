import { createAction, props } from '@ngrx/store';
import { Color } from '@nrwl-practice/model';

export const setColor = createAction(
  '[detail] Set Color',
  props<{ color: Color }>()
);
