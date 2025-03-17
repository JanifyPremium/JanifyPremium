import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs'; // Importiere Observable
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts$: Observable<any[]> = this.blogService.getAllPosts();  // Direkt initialisiert

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
  }
}
