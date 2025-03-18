import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service'; // Passe den Pfad zum BlogService an
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: any = null;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');  // Hole die ID aus der URL
    if (postId) {
      this.blogService.getPostById(postId).subscribe(
        (data) => {
          this.post = data;  // Setze die Blog-Post-Daten
        },
        (error) => {
          console.error('Fehler beim Laden des Posts:', error);
        }
      ); 
    }
    
  }
}
