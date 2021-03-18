import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStoresdetail from './+state/detail/stores/detail.reducer';
import { StoresdetailEffects } from './+state/detail/stores/detail.effects';
import { StoresdetailFacade } from './+state/detail/stores/detail.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromStoresdetail.DETAIL_FEATURE_KEY,
      fromStoresdetail.reducer
    ),
    EffectsModule.forFeature([StoresdetailEffects]),
  ],
  providers: [StoresdetailFacade],
})
export class StoresDetailModule {}
