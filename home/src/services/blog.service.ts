// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://127.0.0.1:8090/api/collections/blog/records';  // URL zu PocketBase-Collection

  constructor(private http: HttpClient) {}

  // Holt alle Blog-Posts und gibt sicher immer ein Array zurück
  getAllPosts(): Promise<any[]> {
    return this.http.get<any[]>(this.apiUrl).toPromise().then(data => data || []);  // Fallback auf leeres Array
  }

  // Holt einen einzelnen Blog-Post anhand der ID
  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
