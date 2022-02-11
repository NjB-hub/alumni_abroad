import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-offer',
  templateUrl: './publish-offer.component.html',
  styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {
  publishOfferForm : FormGroup = this.fb.group({ });

  constructor(private fb: FormBuilder, private feedService: FeedService){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishOfferForm.get('title');
  }

  get company(){
    return this.publishOfferForm.get('company');
  }

  get description(){
    return this.publishOfferForm.get('description');
  }

  onSubmit(): void {
    var title = this.publishOfferForm.get('title')?.value;
    var description = this.publishOfferForm.get('description')?.value;
    var category:string = "offer";

    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    var ownerP = user.id;
    var ownerProfile = user.userProfile[0].id;

    var company = this.publishOfferForm.get('company')?.value;
    
    //requête pour la création du post
    this.feedService.createPost(title, description, category, ownerP, ownerProfile).then(
      (response:any) => {
        //requête pour la création de l'évènement
        var post_id = response.data.id;

        this.feedService.createOffer(company, post_id).then(
          (response:any) => {
            console.log(response);
            this.feedService.getPosts();
            this.feedService.emitPosts();
          },
          (error:any) => {

          }
        )
      },
      (error:any) => {

      }
    );

    this.cancel();
    document.getElementById('postOfferButton')?.click();
  }

  initForm(){
    this.publishOfferForm = this.fb.group({
      title: [''],
      company: [''],
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
