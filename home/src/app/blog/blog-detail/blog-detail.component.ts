import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug'); // URL-Slug holen
    if (slug) {
      this.post = await this.blogService.getPostBySlug(slug); // Blogpost abrufen
    }
  }
}
