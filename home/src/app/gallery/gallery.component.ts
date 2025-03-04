import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,  // ✅ Standalone aktivieren
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [CommonModule] // ✅ Hier imports nutzen
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/organic-blob-shapes-hand-drawn-illustration-free-png-1566768860.png',
    'assets/images/organic-blob-shapes-hand-drawn-illustration-free-png-1566768860.png',
    'assets/images/organic-blob-shapes-hand-drawn-illustration-free-png-1566768860.png',
    'assets/images/organic-blob-shapes-hand-drawn-illustration-free-png-1566768860.png'
  ];
}
