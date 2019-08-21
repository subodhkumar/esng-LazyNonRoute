import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyModuleLoadDirective } from './lazy-module-load.directive';


@NgModule({
  declarations: [
    AppComponent,
    LazyModuleLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
