import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, RouterModule } from '@angular/router';
import { SlicePipe } from '../../pipes/slice.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports:[SlicePipe, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(
      (data) => {
        this.blogPosts = data; 
      },
      (error) => {
        console.error('Fehler beim Laden der Blog-Daten:', error);
      }
    );
  }
  // Navigiert zu einem einzelnen Blog-Post
  goToPost(id: string): void {
    this.router.navigate(['/blog', id]);  
  }
}
