import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

export interface ImageRecord {
  id: string;
  image: string;
  description?: string;
  // Add other expected fields here
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private pb = new PocketBase('http://127.0.0.1:8090');
  private readonly REQUEST_TIMEOUT = 5000; // 5 seconds

  async getImagesFromCollection(collectionName: string): Promise<ImageRecord[]> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.REQUEST_TIMEOUT);
      
      const records = await this.pb.collection(collectionName).getFullList({
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      console.log('Raw records from PocketBase:', records);
      
      return records.map(record => {
        // Try all common image field names
        // Get the actual file object from the record
        const imageFile = record['image'] || record['file'] || record['picture'] || record['photo'] || record['img'];
        
        // Handle both string filenames and file objects
        const imageField = (typeof imageFile === 'string' && imageFile.trim() !== '')
          ? imageFile 
          : (imageFile?.filename || '');
        
        if (!imageField) {
          console.warn('Record has no valid image field:', {
            id: record.id,
            availableFields: Object.keys(record)
          });
        }
        console.log('Complete record data:', record);
        console.log(`All fields in record:`, Object.keys(record));
        console.log(`First 3 image candidates:`, 
          record['image'], 
          record['file'], 
          record['picture']
        );
        
        return {
          id: record.id,
          image: imageField,
          description: record['description'] || undefined
        };
      });
    } catch (error) {
      console.error(`Error loading images from ${collectionName}:`, error);
      return [];
    }
  }
}
