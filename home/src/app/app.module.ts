import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from '../services/blog.service';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    GalleryComponent,   
    AboutComponent,
    BlogComponent,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    BlogService
  ],
})
export class AppModule { }
