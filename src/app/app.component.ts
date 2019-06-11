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
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic1.jpg' },
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic2.jpg' },
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic3.jpeg' },
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic4.jpg' },
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic5.jpg' },
      {name: 'https://cdn.jsdelivr.net/gh/phlipzamo/scrolling@master/src/app/assets/images/pic6.jpg' },
    ];
  }
}
