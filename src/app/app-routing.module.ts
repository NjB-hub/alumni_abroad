import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'core', canActivate: [AuthGuardService], loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },

  { path: 'not-found', component: FourOhFourComponent },
  
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
