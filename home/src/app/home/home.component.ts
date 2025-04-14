import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { ImageRecord } from '../../services/gallery.service';

interface CarouselImage extends ImageRecord {
  imageUrl: string;
  active?: boolean;
  showCaption?: boolean; // Add showCaption property
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselImages: CarouselImage[] = [];
  currentIndex = 0;

  constructor(private galleryService: GalleryService) {}

  async ngOnInit() {
    await this.loadImages();
  }

  async loadImages() {
    try {
      const images = await this.galleryService.getImagesFromCollection('home');
      
      if (!images?.length) {
        console.warn("No images found in collection");
        return;
      }

      this.carouselImages = images.slice(0, 3)
        .filter(img => {
          const hasValidImage = img.image && img.image.trim() !== '';
          return hasValidImage;
        })
        .map((img, i) => {
          const imageUrl = img.image.startsWith('http') 
            ? img.image
            : `http://127.0.0.1:8090/api/files/home/${img.id}/${img.image}`;
          
          return {
            ...img,
            imageUrl: imageUrl,
            active: i === 0
          };
        });
    } catch (error) {
      console.error("Error loading images:", error);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    this.updateActiveImage();
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.updateActiveImage();
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.updateActiveImage();
  }

  private updateActiveImage() {
    this.carouselImages.forEach((img, i) => {
      img.active = i === this.currentIndex;
    });
  }

  showCaption(event: Event, image: CarouselImage) {
    image.showCaption = true;
  }
}
