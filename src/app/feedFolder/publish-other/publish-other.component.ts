import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-other',
  templateUrl: './publish-other.component.html',
  styleUrls: ['./publish-other.component.scss']
})
export class PublishOtherComponent implements OnInit {

  publishOtherForm : FormGroup = this.fb.group({ });

  constructor(private fb: FormBuilder, private feedService: FeedService){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishOtherForm.get('title');
  }

  get description(){
    return this.publishOtherForm.get('description');
  }

  onSubmit(): void {
    var title = this.publishOtherForm.get('title')?.value;
    var description = this.publishOtherForm.get('description')?.value;
    var category:string = "other";

    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    var ownerP = user.id;
    var ownerProfile = user.userProfile[0].id;
    
    //requête pour la création du post
    this.feedService.createPost(title, description, category, ownerP, ownerProfile).then(
      (response:any) => {
        
      },
      (error:any) => {

      }
    );

    this.cancel();
    document.getElementById('postOtherButton')?.click();
  }

  initForm(){
    this.publishOtherForm = this.fb.group({
      title: [''],
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
