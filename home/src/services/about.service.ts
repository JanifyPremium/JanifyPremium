import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root' // 💡 Stellt sicher, dass der Service global verfügbar ist
})
export class AboutService {
  private pb = new PocketBase('http://127.0.0.1:8090');

  async getAboutData() {
    try {
      return await this.pb.collection('about').getFirstListItem('');
    } catch (error) {
      console.error("Fehler beim Abrufen der About-Daten:", error);
      return null;
    }
  }
}
