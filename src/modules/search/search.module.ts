import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultListItemComponent } from './result-list-item/result-list-item.component';

const routes: Routes = [
  { path: '', component: SearchComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    SearchComponent,
    ResultListComponent,
    ResultListItemComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class SearchModule { }
