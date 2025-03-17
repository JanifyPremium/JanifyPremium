import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
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
