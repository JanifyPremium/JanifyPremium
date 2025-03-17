import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent
  ],
  providers: [],
})
export class AppModule { }
