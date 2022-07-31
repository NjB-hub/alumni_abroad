import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCalendarComponent } from './m-calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';

const routes: Routes = [
  { path: '', component: MCalendarComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    MCalendarComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class MCalendarModule { }
