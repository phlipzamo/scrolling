import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule} from 'ng2-carouselamos'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2CarouselamosModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
