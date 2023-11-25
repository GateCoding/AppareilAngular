import { Component } from '@angular/core';

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent {
  isOk:boolean=true;
  constructor() {
    setTimeout(()=>{
      this.isOk=false;
    },5000);
  }
}
