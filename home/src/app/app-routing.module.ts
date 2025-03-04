import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Startseite
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback zur Startseite
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Hier wird RouterModule korrekt importiert
  exports: [RouterModule]
})
export class AppRoutingModule { }
