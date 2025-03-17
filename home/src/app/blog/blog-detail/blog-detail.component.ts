import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { CommonModule } from '@angular/common';  // Für NgIf und andere Standard-Direktiven
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true, // Setze die Standalone-Eigenschaft auf true
  imports: [CommonModule, RouterModule],  // Importiere CommonModule für NgIf und RouterModule
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogId: string | null = null;
  post: any;  // Die Blog-Post-Daten
  loading: boolean = true;  // Flag, um zu wissen, ob die Daten noch geladen werden

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService  // BlogService zum Abrufen der Post-Daten
  ) {}

  ngOnInit(): void {
    // Die Blog-ID aus der URL abrufen
    this.blogId = this.route.snapshot.paramMap.get('id');

    // Wenn eine Blog-ID vorhanden ist, rufe die Post-Daten ab
    if (this.blogId) {
      this.blogService.getPostById(this.blogId).subscribe(
        (data) => {
          this.post = data;  // Speichere die Blog-Daten in der 'post'-Eigenschaft
          this.loading = false;  // Setze das 'loading'-Flag auf false, wenn die Daten geladen wurden
        },
        (error) => {
          console.error('Fehler beim Laden des Posts', error);
          this.loading = false;  // Auch im Fehlerfall das 'loading'-Flag auf false setzen
        }
      );
    }
  }
}
