import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { CvFormComponent } from './cvFolder/cv-form/cv-form.component';
import { CvComponent } from './cvFolder/cv/cv.component';
import { CalendarContainerComponent } from './feedFolder/calendar-container/calendar-container.component';
import { HomeComponent } from './feedFolder/home/home.component';
import { PublishOfferComponent } from './feedFolder/publish-offer/publish-offer.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { IndexComponent } from './index/index.component';
import { NotificationsComponent } from './notificationsFolder/notifications/notifications.component';
import { ProfileFormComponent } from './profileFolder/profile-form/profile-form.component';
import { ProfileComponent } from './profileFolder/profile/profile.component';
import { SearchComponent } from './searchFolder/search/search.component';

const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },


  { path: 'settings/viewprofile', component: ProfileComponent },
  { path: 'settings/modifyprofile', component: ProfileFormComponent },
  { path: 'settings/viewcv', component: CvComponent },
  { path: 'settings/modifycv', component: CvFormComponent },
  { path: 'feed', canActivate: [AuthGuardService], component: HomeComponent }, //canActivate for app protection when not signed in
  { path: 'feed/publish:offer', component: PublishOfferComponent },

  { path: 'not-found', component: FourOhFourComponent },

  { path: 'notifications', component: NotificationsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cv', component: CvComponent },
  { path: 'calendar', component: CalendarContainerComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
