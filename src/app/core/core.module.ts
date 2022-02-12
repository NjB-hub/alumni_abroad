import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavCoreComponent } from './nav-core/nav-core.component';


@NgModule({
  declarations: [
    CoreComponent,
    NavCoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
