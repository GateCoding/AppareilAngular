import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  appareilName: String = "Téléphone";
  appareilStatut:String="On";
  appareilAvatar:String="assets/images/avatar1.png"

}
