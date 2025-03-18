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
  images: any[] = [];  // Bilder Array
  selectedCategory: string = 'all';  // Standardwert für das Dropdown
  selectedImage: any = null;

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    try {
      console.log("🔄 Lade Bilder aus der 'gallery' Collection...");

      // Bilder von der PocketBase-Collection "gallery" abrufen
      const images = await this.galleryService.getImagesFromCollection('gallery');

      // Die Bilder URL korrekt formatieren
      this.images = images.map(img => ({
        ...img,
        imageUrl: `http://127.0.0.1:8090/api/files/gallery/${img.id}/${img.image}`  // URL anpassen, je nach PocketBase Setup
      }));

      console.log("✅ Bilder erfolgreich geladen:", this.images);
    } catch (error) {
      console.error("❌ Fehler beim Laden der Bilder:", error);
    }
  }

  // Filtert Bilder je nach ausgewählter Kategorie
  filteredImages() {
    return this.selectedCategory === 'all'
      ? this.images
      : this.images.filter(image => image.category === this.selectedCategory);  // Filtert nach Kategorie
  }

  // Aktualisiert die ausgewählte Kategorie bei Änderung im Dropdown
  onCategoryChange(event: Event) {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
  }
  // Funktion, um das Bild im Modal anzuzeigen
  openImageModal(image: any) {
    this.selectedImage = image;
  }

  // Funktion, um das Modal zu schließen
  closeImageModal() {
    this.selectedImage = null;
  }
}
