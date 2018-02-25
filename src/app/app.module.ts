import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CategoryList } from './categories/categoryList.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedsService } from './feeds/feeds.service';
 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,FeedsComponent,CategoryList ],
  bootstrap:    [ AppComponent ],
  providers:[FeedsService]
})

export class AppModule { }
