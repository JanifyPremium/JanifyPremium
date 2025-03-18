import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://127.0.0.1:8090/api/collections/blog/records';  // Beispiel URL für PocketBase oder eine andere API

  constructor(private http: HttpClient) {}

  // Holt alle Blog-Posts
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Holt einen einzelnen Blog-Post
  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
