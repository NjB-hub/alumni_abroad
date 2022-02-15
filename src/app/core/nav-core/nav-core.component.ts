import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from 'src/app/feed/services/feed.service';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.scss']
})
export class NavCoreComponent implements OnInit, OnDestroy {

  @Input() isVisible:boolean=true;

  newPost:Boolean = false;
  newPostChecker:any;

  feedSubscription:Subscription = new Subscription();

  constructor(private router:Router, private feedService:FeedService) { }

  ngOnInit(): void {
    this.launchNewPostChecker();
  }

  signOut() {
    if(confirm("Are you sure to log out ? ")) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      this.router.navigate(['']);
    }
  }

  emitPosts(){
    this.feedService.getPosts();
    this.feedService.emitPosts();

    var content:any = document.getElementById('content');
    content.scrollTop = 0;
  }

  fetchNewPost = () => {
    this.feedService.fetchUnreadPosts();
    
    this.feedSubscription = this.feedService.newPostSubject.subscribe(
      (newPost:Boolean) => {this.newPost = newPost;}
    )
  }

  launchNewPostChecker = () => {
    this.newPostChecker = setInterval(this.fetchNewPost, environment.periodCheckNewPost);
  }

  stopNewPostChecker(){
    clearInterval(this.newPostChecker);
  }

  ngOnDestroy(): void {
    this.stopNewPostChecker();
  }
}
