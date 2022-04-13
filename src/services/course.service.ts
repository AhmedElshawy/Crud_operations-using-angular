import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from './../Models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private getAndPostUrl = "http://localhost:5220/api/courses";
  constructor(private http:HttpClient) 
  { }

  getAllCourses():Observable<ICourse[]>
  {
    return this.http.get<ICourse[]>(this.getAndPostUrl);
  }

  addCourse(course:ICourse)
  {
    return this.http.post(this.getAndPostUrl,course)
  }

  deleteCourse(id:number)
  {
    return this.http.delete(`http://localhost:5220/api/courses/${id}`)
  }
}
