import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth/services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './feedFolder/home/home.component';
import { IndexComponent } from './index/index.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { CvComponent } from './cvFolder/cv/cv.component';
import { CvExpertiseItemComponent } from './cvFolder/cv-expertise-item/cv-expertise-item.component';
import { EducationItemComponent } from './cvFolder/education-item/education-item.component';
import { ExperienceItemComponent } from './cvFolder/experience-item/experience-item.component';
import { PostListComponent } from './feedFolder/post-list/post-list.component';
import { PostListItemComponent } from './feedFolder/post-list-item/post-list-item.component';
import { NotificationsComponent } from './notificationsFolder/notifications/notifications.component';
import { NotificationsListComponent } from './notificationsFolder/notifications-list/notifications-list.component';
import { NotificationsListItemComponent } from './notificationsFolder/notifications-list-item/notifications-list-item.component';
import { SearchComponent } from './searchFolder/search/search.component';
import { CalendarComponent } from './feedFolder/calendar/calendar.component';
import { CalendarContainerComponent } from './feedFolder/calendar-container/calendar-container.component';
import { ResultListComponent } from './searchFolder/result-list/result-list.component';
import { ResultListItemComponent } from './searchFolder/result-list-item/result-list-item.component';
import { PublishOfferComponent } from './feedFolder/publish-offer/publish-offer.component';
//import { NavHomeService } from './services/nav-home.service';
import { ProfileComponent } from './profileFolder/profile/profile.component';
import { CvFormComponent } from './cvFolder/cv-form/cv-form.component';
import { ProfileFormComponent } from './profileFolder/profile-form/profile-form.component';
import { PublishEventComponent } from './feedFolder/publish-event/publish-event.component';
import { UploadFilesComponent } from './feedFolder/upload-files/upload-files.component';
import { UploadedFileItemComponent } from './feedFolder/uploaded-file-item/uploaded-file-item.component';
import { PublishOtherComponent } from './feedFolder/publish-other/publish-other.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    IndexComponent,
    NavHomeComponent,
    NavIndexComponent,
    FourOhFourComponent,
    FooterIndexComponent,
    CvComponent,
    CvExpertiseItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    PostListComponent,
    PostListItemComponent,
    NotificationsComponent,
    NotificationsListComponent,
    NotificationsListItemComponent,
    SearchComponent,
    CalendarComponent,
    CalendarContainerComponent,
    ResultListComponent,
    ResultListItemComponent,
    PublishOfferComponent,
    ProfileComponent,
    CvFormComponent,
    ProfileFormComponent,
    PublishEventComponent,
    UploadFilesComponent,
    UploadedFileItemComponent,
    PublishOtherComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
