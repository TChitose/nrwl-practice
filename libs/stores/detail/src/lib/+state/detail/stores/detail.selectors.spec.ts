import { StoresdetailEntity } from './detail.models';
import {
  State,
  storesdetailAdapter,
  initialState,
} from './detail.reducer';
import * as StoresdetailSelectors from './detail.selectors';

describe('Storesdetail Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getStoresdetailId = (it) => it['id'];
  const createStoresdetailEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as StoresdetailEntity);

  let state;

  beforeEach(() => {
    state = {
      storesdetail: storesdetailAdapter.setAll(
        [
          createStoresdetailEntity('PRODUCT-AAA'),
          createStoresdetailEntity('PRODUCT-BBB'),
          createStoresdetailEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Storesdetail Selectors', () => {
    it('getAllStoresdetail() should return the list of Storesdetail', () => {
      const results = StoresdetailSelectors.getAllStoresdetail(state);
      const selId = getStoresdetailId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = StoresdetailSelectors.getSelected(state);
      const selId = getStoresdetailId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getStoresdetailLoaded() should return the current 'loaded' status", () => {
      const result = StoresdetailSelectors.getStoresdetailLoaded(state);

      expect(result).toBe(true);
    });

    it("getStoresdetailError() should return the current 'error' state", () => {
      const result = StoresdetailSelectors.getStoresdetailError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
