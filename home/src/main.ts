import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { BlogComponent } from './app/blog/blog.component';
import { BlogDetailComponent } from './app/blog/blog-detail/blog-detail.component';

// Definiere die Routen
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },  // Route für Blog-Details
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

// Bootstrap der Anwendung
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())]
}).catch(err => console.error(err));
