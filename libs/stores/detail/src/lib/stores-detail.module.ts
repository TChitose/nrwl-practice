import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStoresdetail from './+state/detail/detail.reducer';
import { StoresdetailEffects } from './+state/detail/detail.effects';
import { StoresdetailFacade } from './+state/detail/detail.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromStoresdetail.STORES / DETAIL_FEATURE_KEY,
      fromStoresdetail.reducer
    ),
    EffectsModule.forFeature([StoresdetailEffects]),
  ],
  providers: [StoresdetailFacade],
})
export class StoresDetailModule {}
