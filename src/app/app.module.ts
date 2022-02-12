import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth/services/auth.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { AuthGuardService } from './auth/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavIndexComponent,
    FourOhFourComponent,
    FooterIndexComponent,
  ],
  exports: [
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
