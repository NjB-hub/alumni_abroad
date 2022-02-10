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

  constructor(private http:HttpClient) { }

  emitFiles(){
    this.imagesSubject.next(this.images.slice());
    this.videosSubject.next(this.videos.slice());
    this.documentsSubject.next(this.documents.slice());
  }

  postEvent(title: string, description:string, ownerP: string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'post/create', {title: title, description: description, ownerP: ownerP}).subscribe(
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
