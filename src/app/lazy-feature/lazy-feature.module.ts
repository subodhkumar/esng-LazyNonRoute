import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCOneComponent } from './lazy-cone/lazy-cone.component';

@NgModule({
  declarations: [LazyFeatureModule.rootComponent],
  entryComponents: [LazyFeatureModule.rootComponent],
  imports: [
    CommonModule
  ]
})
export class LazyFeatureModule { 
  static rootComponent = LazyCOneComponent
}
