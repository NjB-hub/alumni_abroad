import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onView(path:string):void{
    this.router.navigate(['/dashboard/help',path]);

  }

}
