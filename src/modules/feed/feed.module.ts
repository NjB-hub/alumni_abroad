import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { UploadedFileItemComponent } from './uploaded-file-item/uploaded-file-item.component';
import { PublishOtherComponent } from './publish-other/publish-other.component';
import { PublishOfferComponent } from './publish-offer/publish-offer.component';
import { PublishEventComponent } from './publish-event/publish-event.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { AppModule } from '../../app/app.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { FocusMeDirective } from './directives/focus-me.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [
    FeedComponent,
    PostListComponent,
    PostListItemComponent,
    UploadFilesComponent,
    UploadedFileItemComponent,
    PublishOtherComponent,
    PublishOfferComponent,
    PublishEventComponent,
    CommentListComponent,
    CommentListItemComponent,
    FocusMeDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeedRoutingModule,
  ],
})
export class FeedModule { }