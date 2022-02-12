import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.scss']
})
export class PublishEventComponent implements OnInit {

  publishEventForm : FormGroup = this.fb.group({ });

  @Output() postSent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private feedService: FeedService, private router:Router){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishEventForm.get('title');
  }

  get place(){
    return this.publishEventForm.get('place');
  }

  get date(){
    return this.publishEventForm.get('date');
  }

  get description(){
    return this.publishEventForm.get('description');
  }

  onSubmit(): void {
    var title = this.publishEventForm.get('title')?.value;
    var description = this.publishEventForm.get('description')?.value;
    var category:string = "event";

    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    var ownerP = user.id;
    var ownerProfile = user.userProfile[0].id;

    var place = this.publishEventForm.get('place')?.value;
    var date = this.publishEventForm.get('date')?.value;
    
    //requête pour la création du post
    this.feedService.createPost(title, description, category, ownerP, ownerProfile).then(
      (response:any) => {
        //requête pour la création de l'évènement
        var post_id = response.data.id;

        this.feedService.createEvent(date, place, post_id).then(
          (response:any) => {

            this.feedService.getPosts();
            this.feedService.emitPosts();

            this.cancel();
            document.getElementById('postEventButton')?.click();

            this.router.navigate(['/core/feed']);
            this.postSent.emit();
          },
          (error:any) => {

          }
        )
      },
      (error:any) => {

      }
    );
  }

  initForm(){
    this.publishEventForm = this.fb.group({
      title: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  cancel(){
    this.initForm();

    this.feedService.images = [];
    this.feedService.videos = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }
}
