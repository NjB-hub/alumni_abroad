import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAlertComponent } from './m-alert.component';



@NgModule({
  declarations: [
    MAlertComponent
  ],
  exports:[
    MAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MAlertModule { }
