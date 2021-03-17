import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { StoresdetailEntity } from './detail.models';
import { StoresdetailEffects } from './detail.effects';
import { StoresdetailFacade } from './detail.facade';

import * as StoresdetailSelectors from './detail.selectors';
import * as StoresdetailActions from './detail.actions';
import {
  DETAIL_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './detail.reducer';

interface TestSchema {
  'storesdetail' : State
}

describe('StoresdetailFacade', () => {
  let facade: StoresdetailFacade;
  let store: Store<TestSchema>;
  const createStoresdetailEntity = (id: string, name = '' ) => ({
    id,
    name: name || `name-${id}`
  } as StoresdetailEntity);

  beforeEach(() => {

  });

  describe('used in NgModule', () => {

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DETAIL_FEATURE_KEY, reducer),
          EffectsModule.forFeature([StoresdetailEffects])
        ],
        providers: [StoresdetailFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(StoresdetailFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allStoresdetail$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allStoresdetail$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadStoresdetailSuccess` to manually update list
     */
    it('allStoresdetail$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allStoresdetail$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(StoresdetailActions.loadStoresdetailSuccess({
          storesdetail: [
            createStoresdetailEntity('AAA'),
            createStoresdetailEntity('BBB')
          ]})
        );

        list = await readFirst(facade.allStoresdetail$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

});
