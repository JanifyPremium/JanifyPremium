import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any[] = [];
  selectedCategory: string = 'all';

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    try {
      console.log("🔄 Lade Bilder aus der 'gallery' Collection...");

      // Bilder aus PocketBase-Collection "gallery" abrufen
      const images = await this.galleryService.getImagesFromCollection('gallery');

      this.images = images.map(img => ({
        ...img,
        imageUrl: `http://127.0.0.1:8090/api/files/gallery/${img.id}/${img.image}`
      }));

      console.log("✅ Bilder erfolgreich geladen:", this.images);
    } catch (error) {
      console.error("❌ Fehler beim Laden der Bilder:", error);
    }
  } 

  filteredImages() {
    return this.selectedCategory === 'all'
      ? this.images
      : this.images.filter(image => image.category === this.selectedCategory);
  }

  onCategoryChange(event: Event) {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
  }
}
