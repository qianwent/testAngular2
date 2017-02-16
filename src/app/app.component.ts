import { Component } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public message : string;
  constructor(myService : MyService){
    this.message = myService.getMessage();
  }
}
