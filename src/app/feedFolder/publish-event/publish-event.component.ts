import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.scss']
})
export class PublishEventComponent implements OnInit {

  publishEventForm : FormGroup = this.fb.group({ });

  constructor(private fb: FormBuilder, private feedService: FeedService){}

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

    console.log(ownerP);


    var place = this.publishEventForm.get('place')?.value;
    var date = this.publishEventForm.get('date')?.value;
    
    

    console.log(title);
    console.log(place);
    console.log(date);
    console.log(description);

    this.cancel();
    document.getElementById('postEventButton')?.click();
  }

  initForm(){
    this.publishEventForm = this.fb.group({
      title: [''],
      place: [''],
      date: [''],
      description: [''],
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
