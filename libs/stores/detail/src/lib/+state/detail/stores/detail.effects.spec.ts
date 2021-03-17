import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { StoresdetailEffects } from './detail.effects';
import * as StoresdetailActions from './detail.actions';

describe('StoresdetailEffects', () => {
  let actions: Observable<any>;
  let effects: StoresdetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        StoresdetailEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(StoresdetailEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: StoresdetailActions.init() });

      const expected = hot('-a-|', {
        a: StoresdetailActions.loadStoresdetailSuccess({ storesdetail: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
