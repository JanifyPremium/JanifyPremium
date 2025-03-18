import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselImages: any[] = [];

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    try {
      console.log("🔄 Lade Bilder aus der 'home' Collection...");
      
      // Bilder aus der PocketBase-Collection "home" abrufen
      const images = await this.galleryService.getImagesFromCollection('home');

      // Nur die ersten 3 Bilder für das Carousel nehmen
      this.carouselImages = images.slice(0, 3).map(img => ({
        ...img,
        imageUrl: `http://127.0.0.1:8090/api/files/home/${img.id}/${img.image}`
      }));

      console.log("✅ Bilder erfolgreich geladen:", this.carouselImages);
    } catch (error) {
      console.error("❌ Fehler beim Laden der Bilder:", error);
    }
  }
}
