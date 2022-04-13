import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITrack } from './../Models/Track';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private url = "http://localhost:5220/api/tracks";
  constructor(private http:HttpClient) { }
  
  getAllTracks():Observable<ITrack>
  {
    return this.http.get<ITrack>(this.url);
  }
}
