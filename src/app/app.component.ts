import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items:Array<any> =[];

  constructor(){
    this.items = [
      {name: 'assets/images/pic1.png' },
      {name: 'assets/images/pic2.png' },
      {name: 'assets/images/pic3.png' },
      {name: 'assets/images/pic4.png' },
      {name: 'assets/images/pic5.png' },
      {name: 'assets/images/pic6.png' },
    ];
  }
}
