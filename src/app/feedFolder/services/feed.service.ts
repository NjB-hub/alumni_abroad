import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //list of files to upload for a given post
  imagesSubject = new Subject<any[]>();
  images:any[] = [];

  videosSubject = new Subject<any[]>();
  videos:any[] = [];

  documentsSubject = new Subject<any[]>();
  documents:any[] = [];

  //liste des posts
  postsListSubject = new Subject<any[]>();
  postsList:any[] = [];

  constructor(private http:HttpClient) { }

  emitFiles(){
    this.imagesSubject.next(this.images.slice());
    this.videosSubject.next(this.videos.slice());
    this.documentsSubject.next(this.documents.slice());
  }

  emitPosts(){
    this.postsListSubject.next(this.postsList.slice());
  }

  createPost(title: string, description:string, category:string, ownerP: string, ownerProfile: string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'post/create', {title: title, description: description, category:category, ownerP: ownerP, ownerProfile: ownerProfile}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  createEvent(dateEvent: string, place:string, post_id:string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'event/create', {dateEvent: dateEvent, place: place, post_id: post_id}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  createOffer(company: string, post_id:string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'offer/create', {company: company, post_id: post_id}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  //get the post List
  getPosts(){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.get( environment.backend_API_URL + 'post/index').subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }
}
