import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseApi=environment.apiUrl;

  constructor(private http:HttpClient) { }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseApi+'/posts/');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(this.baseApi+'/posts/', postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(this.baseApi+'/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseApi+'/posts/by-user/' + name);
  }
}
