import { StoresdetailEntity } from './detail.models';
import * as StoresdetailActions from './detail.actions';
import { State, initialState, reducer } from './detail.reducer';

describe('Storesdetail Reducer', () => {
  const createStoresdetailEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as StoresdetailEntity);

  beforeEach(() => {});

  describe('valid Storesdetail actions', () => {
    it('loadStoresdetailSuccess should return set the list of known Storesdetail', () => {
      const storesdetail = [
        createStoresdetailEntity('PRODUCT-AAA'),
        createStoresdetailEntity('PRODUCT-zzz'),
      ];
      const action = StoresdetailActions.loadStoresdetailSuccess({
        storesdetail,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
