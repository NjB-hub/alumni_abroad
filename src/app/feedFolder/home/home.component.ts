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

  postEventClicked(){
    this.hidePostOfferForm();
    this.hidePostOtherForm();
  }

  postOfferClicked(){
    this.hidePostEventForm();
    this.hidePostOtherForm();
  }

  postOtherClicked(){
    this.hidePostEventForm();
    this.hidePostOfferForm();
  }

  hidePostEventForm(){
    const comp = document.getElementById('publishEventForm');
    comp?.classList.remove("show");
  }

  hidePostOfferForm(){
    const comp = document.getElementById('publishOfferForm');
    comp?.classList.remove("show");
  }

  hidePostOtherForm(){
    const comp = document.getElementById('publishOtherForm');
    comp?.classList.remove("show");
  }

}
