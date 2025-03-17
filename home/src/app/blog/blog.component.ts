// blog.component.ts
import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '../../pipes/slice.pipe';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true, 
  imports: [CommonModule, SlicePipe, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    this.blogPosts = await this.blogService.getAllPosts();
  }
}
