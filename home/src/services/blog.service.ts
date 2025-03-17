import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private pb = new PocketBase('http://127.0.0.1:8090'); // Deine PocketBase URL

  async getAllPosts() {
    return await this.pb.collection('blog').getFullList();
  }

  async getPostBySlug(slug: string) {
    return await this.pb.collection('blog').getFirstListItem(`slug="${slug}"`);
  }
}
