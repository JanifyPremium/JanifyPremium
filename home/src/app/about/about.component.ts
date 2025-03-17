import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData: any = null;

  constructor(private aboutService: AboutService) {}

  async ngOnInit() {
    try {
      const data = await this.aboutService.getAboutData();
      if (data) {
        this.aboutData = {
          ...data,
          imageUrl: `http://127.0.0.1:8090/api/files/${data['collectionId']}/${data['id']}/${data['image']}`
        };
        console.log("Geladene Daten:", this.aboutData);
      }
    } catch (error) {
      console.error("Fehler beim Laden der About-Daten:", error);
    }
  }
  
}
