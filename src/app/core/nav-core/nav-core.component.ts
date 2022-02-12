import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from 'src/app/feed/services/feed.service';

@Component({
  selector: 'app-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.scss']
})
export class NavCoreComponent implements OnInit {

  @Input() isVisible:boolean=true;

  constructor(private router:Router, private feedService:FeedService) { }

  ngOnInit(): void {
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
  }

}
