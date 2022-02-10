import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  user:any;

  ngOnInit(): void {
    const tmpUser:any = localStorage.getItem('user');
    this.user = JSON.parse(tmpUser);
  }

}
