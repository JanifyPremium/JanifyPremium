import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private pb = new PocketBase('http://127.0.0.1:8090');

  async getImagesFromCollection(collectionName: string): Promise<any[]> {
    try {
      const records = await this.pb.collection(collectionName).getFullList();
      return records;
    } catch (error) {
      console.error(`Fehler beim Laden der Bilder aus ${collectionName}:`, error);
      return [];    }
  }
}
